import { EditorState } from "draft-js";
import insertNewLine from "./modifiers/insertNewLine";
import setSelection from "./modifiers/setSelection";
import setSelectionToBlock from "./modifiers/setSelectionToBlock";
import createDecorator from "./createDecorator";
import createBlockKeyStore from "./utils/createBlockKeyStore";
import blockInSelection from "./utils/blockInSelection";
import getBlockMapKeys from "./utils/getBlockMapKeys";
import removeBlock from "./modifiers/removeBlock";

const focusableBlockIsSelected = (editorState, blockKeyStore) => {
  const selection = editorState.getSelection();
  if (selection.getAnchorKey() !== selection.getFocusKey()) {
    return false;
  }
  const content = editorState.getCurrentContent();
  const block = content.getBlockForKey(selection.getAnchorKey());
  return blockKeyStore.includes(block.getKey());
};

const deleteCommands = [
  "backspace",
  "backspace-word",
  "backspace-to-start-of-line",
  "delete",
  "delete-word",
  "delete-to-end-of-block",
];

export default (config = {}) => {
  const focusableBlocks = config.focusableBlocks || [];
  const blockKeyStore = createBlockKeyStore({});
  let lastSelection;
  let lastContentState;

  return {
    handleReturn: (event, editorState, { setEditorState }) => {
      // if a focusable block is selected then overwrite new line behavior to custom
      if (focusableBlockIsSelected(editorState, blockKeyStore)) {
        setEditorState(insertNewLine(editorState));
        return "handled";
      }
      return "not-handled";
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (
        deleteCommands.includes(command) &&
        focusableBlockIsSelected(editorState, blockKeyStore)
      ) {
        const key = editorState.getSelection().getStartKey();
        const newEditorState = removeBlock(editorState, key);
        if (newEditorState !== editorState) {
          setEditorState(newEditorState);
          return "handled";
        }
      }
      return "not-handled";
    },
    onChange: (editorState) => {
      // in case the content changed there is no need to re-render blockRendererFn
      // since if a block was added it will be rendered anyway and if it was text
      // then the change was not a pure selection change
      const contentState = editorState.getCurrentContent();
      if (!contentState.equals(lastContentState)) {
        lastContentState = contentState;
        return editorState;
      }
      lastContentState = contentState;

      // if the selection didn't change there is no need to re-render
      const selection = editorState.getSelection();
      if (lastSelection && selection.equals(lastSelection)) {
        lastSelection = editorState.getSelection();
        return editorState;
      }

      // Note: Only if the previous or current selection contained a focusableBlock a re-render is needed.
      const focusableBlockKeys = blockKeyStore.getAll();
      if (lastSelection) {
        const lastBlockMapKeys = getBlockMapKeys(
          contentState,
          lastSelection.getStartKey(),
          lastSelection.getEndKey(),
        );
        if (lastBlockMapKeys.some((key) => focusableBlockKeys.includes(key))) {
          lastSelection = selection;
          // By forcing the selection the editor will trigger the blockRendererFn which is
          // necessary for the blockProps containing isFocus to be passed down again.
          return EditorState.forceSelection(
            editorState,
            editorState.getSelection(),
          );
        }
      }

      const currentBlockMapKeys = getBlockMapKeys(
        contentState,
        selection.getStartKey(),
        selection.getEndKey(),
      );
      if (currentBlockMapKeys.some((key) => focusableBlockKeys.includes(key))) {
        lastSelection = selection;
        // By forcing the selection the editor will trigger the blockRendererFn which is
        // necessary for the blockProps containing isFocus to be passed down again.
        return EditorState.forceSelection(
          editorState,
          editorState.getSelection(),
        );
      }

      return editorState;
    },
    keyBindingFn(evt, { getEditorState, setEditorState }) {
      const editorState = getEditorState();
      // TODO match by entity instead of block type
      if (focusableBlockIsSelected(editorState, blockKeyStore)) {
        if (evt.key === "ArrowLeft") {
          setSelection(getEditorState, setEditorState, "up", evt);
        }
        if (evt.key === "ArrowRight") {
          setSelection(getEditorState, setEditorState, "down", evt);
        }
      }

      // Don't manually overwrite in case the shift key is used to avoid breaking
      // native behaviour that works anyway.
      if (evt.shiftKey) {
        return;
      }

      if (evt.key === "ArrowLeft") {
        // Covering the case to select the before block
        const selection = editorState.getSelection();
        const selectionKey = selection.getAnchorKey();
        const beforeBlock = editorState
          .getCurrentContent()
          .getBlockBefore(selectionKey);
        // only if the selection caret is a the left most position
        if (
          beforeBlock &&
          selection.getAnchorOffset() === 0 &&
          blockKeyStore.includes(beforeBlock.getKey())
        ) {
          setSelection(getEditorState, setEditorState, "up", evt);
        }
      }
      if (evt.key === "ArrowRight") {
        // Covering the case to select the after block
        const selection = editorState.getSelection();
        const selectionKey = selection.getFocusKey();
        const currentBlock = editorState
          .getCurrentContent()
          .getBlockForKey(selectionKey);
        const afterBlock = editorState
          .getCurrentContent()
          .getBlockAfter(selectionKey);
        const notAtomicAndLastPost =
          !focusableBlocks.includes(currentBlock.getType()) &&
          currentBlock.getLength() === selection.getFocusOffset();
        if (
          afterBlock &&
          notAtomicAndLastPost &&
          blockKeyStore.includes(afterBlock.getKey())
        ) {
          setSelection(getEditorState, setEditorState, "down", evt);
        }
      }
    },
    // Wrap all block-types in block-focus decorator
    blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => {
      if (!focusableBlocks.includes(contentBlock.getType())) {
        return undefined;
      }

      const editorState = getEditorState();
      const isFocused = blockInSelection(editorState, contentBlock.getKey());

      return {
        props: {
          isFocused,
          isCollapsedSelection: editorState.getSelection().isCollapsed(),
          setFocusToBlock: () => {
            setSelectionToBlock(getEditorState, setEditorState, contentBlock);
          },
        },
      };
    },
    // Handle down/up arrow events and set activeBlock/selection if necessary
    onDownArrow: (event, { getEditorState, setEditorState }) => {
      // TODO edgecase: if one block is selected and the user wants to expand the selection using the shift key

      const editorState = getEditorState();
      if (focusableBlockIsSelected(editorState, blockKeyStore)) {
        setSelection(getEditorState, setEditorState, "down", event);
        return;
      }

      // Don't manually overwrite in case the shift key is used to avoid breaking
      // native behaviour that works anyway.
      if (event.shiftKey) {
        return;
      }

      // Covering the case to select the after block with arrow down
      const selectionKey = editorState.getSelection().getAnchorKey();
      const afterBlock = editorState
        .getCurrentContent()
        .getBlockAfter(selectionKey);
      if (afterBlock && blockKeyStore.includes(afterBlock.getKey())) {
        setSelection(getEditorState, setEditorState, "down", event);
      }
    },
    onUpArrow: (event, { getEditorState, setEditorState }) => {
      // TODO edgecase: if one block is selected and the user wants to expand the selection using the shift key

      const editorState = getEditorState();
      if (focusableBlockIsSelected(editorState, blockKeyStore)) {
        setSelection(getEditorState, setEditorState, "up", event);
      }

      // Don't manually overwrite in case the shift key is used to avoid breaking
      // native behaviour that works anyway.
      if (event.shiftKey) {
        return;
      }

      // Covering the case to select the before block with arrow up
      const selectionKey = editorState.getSelection().getAnchorKey();
      const beforeBlock = editorState
        .getCurrentContent()
        .getBlockBefore(selectionKey);
      if (beforeBlock && blockKeyStore.includes(beforeBlock.getKey())) {
        setSelection(getEditorState, setEditorState, "up", event);
      }
    },
    decorator: createDecorator({ blockKeyStore }),
  };
};
