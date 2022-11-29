import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import { convertFromHTML, convertToHTML } from "draft-convert";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  RawDraftContentState,
} from "draft-js";
import { Formik } from "formik";

import {
  DraftailEditor,
  InlineToolbar,
  BlockToolbar,
  MetaToolbar,
  INLINE_STYLE,
  ENTITY_TYPE,
  BLOCK_TYPE,
  DraftUtils,
  Toolbar,
  CommandPalette,
  CommandControl,
} from "../src/index";

import {
  INLINE_CONTROL,
  BLOCK_CONTROL,
  ENTITY_CONTROL,
  REDACTED_STYLE,
  BR_ICON,
  UNDO_ICON,
  REDO_ICON,
  SCISSORS_ICON,
} from "./constants/ui";
import indexContentState from "./constants/indexContentState";

import EditorWrapper from "./components/EditorWrapper";
import PrismDecorator from "./components/PrismDecorator";
import ReadingTime from "./components/ReadingTime";
import CharCount from "./components/CharCount";
import BlockPicker from "./components/BlockPicker";

storiesOf("Docs", module)
  // Add a decorator rendering story as a component for hooks support.
  .addDecorator((Story) => <Story />)
  .add("Built-in formats", () => (
    <EditorWrapper
      id="docs-built-in-formats"
      stripPastedStyles={false}
      enableHorizontalRule
      enableLineBreak
      showUndoControl
      showRedoControl
      maxListNesting={6}
      blockTypes={Object.values(BLOCK_CONTROL)}
      inlineStyles={Object.values(INLINE_CONTROL)}
    />
  ))
  .add("Inline styles", () => (
    <EditorWrapper
      id="docs-inline-styles"
      rawContentState={
        {
          blocks: [
            {
              text: "This is redacted, and this is very bold.",
              inlineStyleRanges: [
                {
                  offset: 8,
                  length: 8,
                  style: "REDACTED",
                },
                {
                  offset: 30,
                  length: 9,
                  style: "BOLD",
                },
              ],
            },
          ],
          entityMap: {},
        } as RawDraftContentState
      }
      stripPastedStyles={false}
      inlineStyles={[
        REDACTED_STYLE,
        {
          label: "Bold",
          type: INLINE_STYLE.BOLD,
          style: {
            fontWeight: "bold",
            textShadow: "1px 1px 1px black",
          },
        },
      ]}
    />
  ))
  .add("Blocks", () => (
    <EditorWrapper
      id="docs-blocks"
      rawContentState={
        {
          blocks: [
            {
              text: "This is blockquote",
              type: "blockquote",
            },
            {
              text: "This is tiny text",
              type: "tiny-text",
            },
          ],
          entityMap: {},
        } as RawDraftContentState
      }
      stripPastedStyles={false}
      blockTypes={[
        BLOCK_CONTROL.BLOCKQUOTE,
        {
          type: "tiny-text",
          label: "Tiny",
        },
      ]}
    />
  ))
  .add("Entities", () => (
    <EditorWrapper
      id="docs-entities"
      rawContentState={
        {
          blocks: [
            {
              text: "Here's an image, and a link:",
              entityRanges: [
                {
                  offset: 23,
                  length: 4,
                  key: 0,
                },
              ],
            },
            {
              text: " ",
              type: "atomic",
              entityRanges: [
                {
                  offset: 0,
                  length: 1,
                  key: 1,
                },
              ],
            },
            {
              text: "",
            },
          ],
          entityMap: {
            0: {
              type: "LINK",
              data: {
                url: "https://www.example.com/",
              },
            },
            1: {
              type: "IMAGE",
              data: {
                src: "/static/example-lowres-image.jpg",
                alt: "",
              },
            },
          },
        } as unknown as RawDraftContentState
      }
      stripPastedStyles={false}
      entityTypes={[ENTITY_CONTROL.LINK, ENTITY_CONTROL.IMAGE]}
    />
  ))
  .add("Decorators", () => (
    <EditorWrapper
      id="docs-decorators"
      rawContentState={
        {
          blocks: [
            {
              text: "Sometimes #hashtags are useful.",
            },
            {
              text: "console.log('Hello, World!');",
              type: "code-block",
            },
          ],
          entityMap: {},
        } as RawDraftContentState
      }
      stripPastedStyles={false}
      blockTypes={[BLOCK_CONTROL.CODE]}
      decorators={[
        {
          strategy: (block, callback) => {
            // Regexes are stateful – this needs to be declared separately from the while loop.
            const regex = /#[\w]+/g;
            const text = block.getText();
            let matches;
            // eslint-disable-next-line no-cond-assign
            while ((matches = regex.exec(text)) !== null) {
              callback(matches.index, matches.index + matches[0].length);
            }
          },

          component: ({ children }: { children: React.ReactNode }) => (
            <span style={{ color: "#007d7e" }}>{children}</span>
          ),
        },
        new PrismDecorator({ defaultLanguage: "javascript" }),
      ]}
    />
  ))
  .add("Controls", () => (
    <EditorWrapper
      id="docs-controls"
      rawContentState={
        {
          blocks: [
            {
              text: "Sometimes #hashtags are useful.",
            },
            {
              text: "console.log('Hello, World!');",
              type: "code-block",
            },
          ],
          entityMap: {},
        } as RawDraftContentState
      }
      stripPastedStyles={false}
      blockTypes={[
        { type: BLOCK_TYPE.HEADER_TWO, label: null },
        { type: BLOCK_TYPE.HEADER_THREE, label: null },
        { type: BLOCK_TYPE.HEADER_FOUR, label: null },
        BLOCK_CONTROL.CODE,
        {
          type: "tiny-text",
          element: "blockquote",
        },
      ]}
      controls={[
        {
          block: BlockPicker,
        },
        {
          block: ReadingTime,
        },
      ]}
    />
  ))
  .add("UI theming", () => (
    <div className="docs-ui-theming">
      <EditorWrapper
        id="docs-ui-theming"
        rawContentState={
          {
            blocks: [
              {
                text: "Focus mode editor!",
                type: "blockquote",
              },
            ],
            entityMap: {},
          } as RawDraftContentState
        }
        stripPastedStyles={false}
        blockTypes={[
          BLOCK_CONTROL.BLOCKQUOTE,
          BLOCK_CONTROL.UNORDERED_LIST_ITEM,
        ]}
      />
    </div>
  ))
  .add("RTL support", () => (
    <div className="docs-rtl-support" dir="rtl">
      <EditorWrapper
        id="docs-rtl-support"
        rawContentState={
          {
            blocks: [
              {
                text: "ما تبحث عنه يبحث عنك",
                type: "blockquote",
                entityRanges: [
                  {
                    offset: 3,
                    length: 4,
                    key: 0,
                  },
                ],
              },
              {
                text: " ",
                type: "atomic",
                entityRanges: [
                  {
                    offset: 0,
                    length: 1,
                    key: 1,
                  },
                ],
              },
              { text: "إنجليزي", type: "unordered-list-item" },
              { text: "العربية", type: "unordered-list-item" },
              { text: "اللغة العِبْرِيَّة", type: "unordered-list-item" },
              { text: "اللُغَةُ الْفَارِسِيَّةُ", type: "unordered-list-item" },
            ],
            entityMap: {
              0: {
                type: "LINK",
                data: {
                  url: "https://www.example.com/",
                },
              },
              1: {
                type: "IMAGE",
                data: {
                  src: "/static/example-lowres-image.jpg",
                  alt: "",
                },
              },
            },
          } as unknown as RawDraftContentState
        }
        textDirectionality="RTL"
        placeholder="اكتب هنا…"
        enableHorizontalRule={{ description: "خط أفقي" }}
        enableLineBreak={{ description: "الخط مقطوع" }}
        showUndoControl={{ description: "تراجع" }}
        showRedoControl={{ description: "إعادة" }}
        stripPastedStyles={false}
        maxListNesting={6}
        commands
        spellCheck
        entityTypes={[
          { ...ENTITY_CONTROL.IMAGE, description: "صورة" },
          { ...ENTITY_CONTROL.EMBED, description: "تضمين" },
          { ...ENTITY_CONTROL.LINK, description: "ارتباط" },
          { ...ENTITY_CONTROL.DOCUMENT, description: "المستند" },
        ]}
        blockTypes={[
          { ...BLOCK_CONTROL.HEADER_TWO, label: "2H", description: "عنوان 2" },
          {
            ...BLOCK_CONTROL.HEADER_THREE,
            label: "3H",
            description: "عنوان 3",
          },
          { ...BLOCK_CONTROL.HEADER_FOUR, label: "4H", description: "عنوان 4" },
          { ...BLOCK_CONTROL.HEADER_FIVE, label: "5H", description: "عنوان 5" },
          {
            ...BLOCK_CONTROL.UNORDERED_LIST_ITEM,
            description: "قائمة تعداد نقطي",
          },
          { ...BLOCK_CONTROL.ORDERED_LIST_ITEM, description: "قائمة مرقمَّة" },
        ]}
        inlineStyles={[
          { ...INLINE_CONTROL.BOLD, description: "غامق" },
          { ...INLINE_CONTROL.ITALIC, description: "مائل" },
        ]}
        topToolbar={(props) => (
          <>
            <BlockToolbar
              {...props}
              triggerLabel="إدراج كتلة"
              comboLabel="اختيار عنصر"
              comboPlaceholder="كتل البحث"
              noResultsText="لم يتم العثور على نتائج"
            />
            <Toolbar {...props} />
          </>
        )}
        bottomToolbar={(props) => (
          <>
            <InlineToolbar {...props} />
            <MetaToolbar showBlockEntities {...props} />
          </>
        )}
        commandToolbar={(props) => (
          <CommandPalette noResultsText="لم يتم العثور على نتائج" {...props} />
        )}
      />
    </div>
  ))
  .add("No toolbar", () => (
    <div className="no-toolbar">
      <EditorWrapper
        id="no-toolbar"
        rawContentState={
          {
            blocks: [
              {
                text: "Disable the toolbar to save space if your editor only supports a handful of formats",
                inlineStyleRanges: [
                  {
                    offset: 23,
                    length: 10,
                    style: "ITALIC",
                  },
                ],
              },
            ],
            entityMap: {},
          } as RawDraftContentState
        }
        stripPastedStyles={false}
        inlineStyles={[INLINE_CONTROL.BOLD, INLINE_CONTROL.ITALIC]}
        topToolbar={null}
      />
    </div>
  ))
  .add("Floating toolbars", () => {
    const commands = [
      {
        label: "Block formats",
        type: "blockTypes",
        items: [
          BLOCK_CONTROL.HEADER_TWO,
          BLOCK_CONTROL.BLOCKQUOTE,
          BLOCK_CONTROL.UNORDERED_LIST_ITEM,
        ],
      },
      {
        label: "Data",
        type: "entityTypes",
        items: [
          ENTITY_CONTROL.IMAGE,
          ENTITY_CONTROL.EMBED,
          {
            type: ENTITY_TYPE.HORIZONTAL_RULE,
          },
        ],
      },
      {
        label: "Actions",
        type: "custom",
        items: [
          {
            type: "split",
            description: "Split",
            icon: SCISSORS_ICON,
            onSelect: ({ editorState }: { editorState: EditorState }) => {
              const block = DraftUtils.getSelectedBlock(editorState);
              return DraftUtils.resetBlockWithType(
                editorState,
                block.getType(),
                "✂",
              );
            },
          },
          {
            type: "reset",
            description: "Reset",
            label: "♻",
            render: ({
              option,
            }: Parameters<NonNullable<CommandControl["render"]>>[0]) => {
              const text = `${option.description} (full reset)`;
              return <div>{text}</div>;
            },
            onSelect: () => EditorState.createEmpty(),
          },
        ],
      },
    ];

    return (
      <div className="docs-floating-toolbars">
        <EditorWrapper
          id="floating-toolbars"
          rawContentState={indexContentState as RawDraftContentState}
          stripPastedStyles={false}
          placeholder="Insert ‘/’ or write here…"
          enableHorizontalRule
          enableLineBreak={{
            icon: BR_ICON,
          }}
          entityTypes={[
            ENTITY_CONTROL.LINK,
            ENTITY_CONTROL.IMAGE,
            ENTITY_CONTROL.EMBED,
          ]}
          blockTypes={[
            BLOCK_CONTROL.HEADER_TWO,
            BLOCK_CONTROL.HEADER_THREE,
            BLOCK_CONTROL.BLOCKQUOTE,
            BLOCK_CONTROL.CODE,
            BLOCK_CONTROL.UNORDERED_LIST_ITEM,
          ]}
          inlineStyles={[
            INLINE_CONTROL.BOLD,
            INLINE_CONTROL.ITALIC,
            INLINE_CONTROL.KEYBOARD,
          ]}
          controls={[
            {
              inline: CharCount,
            },
            {
              meta: CharCount,
            },
          ]}
          commands={commands}
          topToolbar={(props) => (
            <>
              <BlockToolbar {...props} />
              <Toolbar {...props} />
            </>
          )}
          bottomToolbar={(props) => (
            <>
              <InlineToolbar {...props} />
              <MetaToolbar showBlockEntities {...props} />
            </>
          )}
        />
      </div>
    );
  })
  .add("Custom toolbars", () => (
    <div className="docs-custom-toolbars">
      <EditorWrapper
        id="custom-toolbars"
        rawContentState={
          {
            blocks: [
              {
                text: "Use custom toolbars for more flexibility.",
              },
            ],
            entityMap: {},
          } as RawDraftContentState
        }
        stripPastedStyles={false}
        blockTypes={[
          BLOCK_CONTROL.HEADER_TWO,
          BLOCK_CONTROL.HEADER_THREE,
          BLOCK_CONTROL.HEADER_FOUR,
        ]}
        topToolbar={({ toggleBlockType, currentBlock }) => (
          <div className="Draftail-Toolbar" role="toolbar">
            <select
              value={currentBlock}
              onChange={(e) => toggleBlockType(e.target.value)}
            >
              {[
                [BLOCK_TYPE.HEADER_TWO, "H2"],
                [BLOCK_TYPE.HEADER_THREE, "H3"],
                [BLOCK_TYPE.HEADER_FOUR, "H4"],
                [BLOCK_TYPE.UNSTYLED, "¶"],
              ].map(([type, label]) => (
                <option key={type} value={type}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        )}
        bottomToolbar={({ getEditorState }) => (
          <div
            className="Draftail-Toolbar Draftail-Toolbar--bottom"
            role="toolbar"
          >
            <ReadingTime getEditorState={getEditorState} onChange={() => {}} />
          </div>
        )}
      />
    </div>
  ))
  .add("Icons", () => (
    <EditorWrapper
      id="docs-icons"
      rawContentState={
        {
          blocks: [
            {
              text: "Icons can recycle Unicode characters, use SVG, or custom implementations.",
            },
          ],
          entityMap: {},
        } as RawDraftContentState
      }
      enableLineBreak={{ icon: BR_ICON }}
      stripPastedStyles={false}
      inlineStyles={[
        INLINE_CONTROL.BOLD,
        INLINE_CONTROL.KEYBOARD,
        REDACTED_STYLE,
      ]}
      entityTypes={[ENTITY_CONTROL.EMBED]}
      showUndoControl={{
        icon: UNDO_ICON,
      }}
      showRedoControl={{
        icon: REDO_ICON,
      }}
    />
  ))
  .add("i18n", () => (
    <EditorWrapper
      id="docs-i18n"
      rawContentState={
        {
          blocks: [
            {
              text: "All of the text displayed in the Draftail UI can be translated",
            },
          ],
          entityMap: {},
        } as RawDraftContentState
      }
      enableLineBreak={{
        icon: BR_ICON,
        description: "Saut de ligne",
      }}
      stripPastedStyles={false}
      inlineStyles={[
        {
          type: INLINE_STYLE.BOLD,
          label: "Gras",
        },
        {
          type: INLINE_STYLE.KEYBOARD,
          label: "Raccourci",
        },
      ]}
      entityTypes={[
        {
          ...ENTITY_CONTROL.LINK,
          description: "Lien",
        },
      ]}
    />
  ))
  .add("HTML conversion", () => {
    const content = `
    <p>This editor demonstrates <strong>HTML import and export</strong>.</p>
    <hr/>
    <blockquote>Built with <a href="https://github.com/HubSpot/draft-convert">draft-convert</a></blockquote>
    <img src="/static/example-lowres-image2.jpg"/>
    <p></p>
    `;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fromHTML = convertFromHTML({
      htmlToEntity: (nodeName: string, node, createEntity) => {
        // a tags will become LINK entities, marked as mutable, with only the URL as data.
        if (nodeName === "a") {
          return createEntity(ENTITY_TYPE.LINK, "MUTABLE", { url: node.href });
        }

        if (nodeName === "img") {
          return createEntity(ENTITY_TYPE.IMAGE, "IMMUTABLE", {
            src: node.src,
          });
        }

        if (nodeName === "hr") {
          return createEntity(ENTITY_TYPE.HORIZONTAL_RULE, "IMMUTABLE", {});
        }

        return false;
      },
      htmlToBlock: (nodeName: string) => {
        if (nodeName === "hr" || nodeName === "img") {
          // "atomic" blocks is how Draft.js structures block-level entities.
          return "atomic";
        }

        return false;
      },
    });

    const toHTML = convertToHTML({
      blockToHTML: (block) => {
        if (block.type === BLOCK_TYPE.BLOCKQUOTE) {
          return <blockquote />;
        }

        // Discard atomic blocks, as they are converted based on their entity.
        if (block.type === BLOCK_TYPE.ATOMIC) {
          return {
            start: "",
            end: "",
          };
        }

        return null;
      },

      entityToHTML: (entity, originalText) => {
        if (entity.type === ENTITY_TYPE.LINK) {
          return <a href={entity.data.url}>{originalText}</a>;
        }

        if (entity.type === ENTITY_TYPE.IMAGE) {
          return <img src={entity.data.src} alt={entity.data.alt} />;
        }

        if (entity.type === ENTITY_TYPE.HORIZONTAL_RULE) {
          return <hr />;
        }

        return originalText;
      },
    });

    return (
      <EditorWrapper
        id="docs-html"
        rawContentState={convertToRaw(fromHTML(content))}
        onSave={(raw) => {
          // eslint-disable-next-line no-console
          console.log(raw ? toHTML(convertFromRaw(raw)) : "empty editor");
        }}
        stripPastedStyles={false}
        enableHorizontalRule
        inlineStyles={[INLINE_CONTROL.BOLD]}
        blockTypes={[BLOCK_CONTROL.BLOCKQUOTE]}
        entityTypes={[ENTITY_CONTROL.LINK, ENTITY_CONTROL.IMAGE]}
      />
    );
  })
  .add("Single-line", () => (
    <EditorWrapper
      id="single-line"
      inlineStyles={[INLINE_CONTROL.BOLD, INLINE_CONTROL.ITALIC]}
      entityTypes={[ENTITY_CONTROL.LINK]}
      enableLineBreak
      multiline={false}
      stripPastedStyles={false}
    />
  ))
  .add("Form validation", () => (
    <Formik
      initialValues={
        { content: null } as { content: RawDraftContentState | null }
      }
      onSubmit={window.alert.bind(null, "Success!")}
      validate={(values) => {
        const errors: { content?: string } = {};

        if (!values.content) {
          errors.content = "Please enter at least two paragraphs";
        } else {
          const { blocks, entityMap } = values.content;
          if (Object.keys(entityMap).length === 0) {
            errors.content = "Please use at least one link";
          }

          // Check there are at least two blocks with non-whitespace text
          if (blocks.filter((b) => b.text.trim().length > 0).length < 2) {
            errors.content = "Please enter at least two paragraphs";
          }
        }

        return errors;
      }}
    >
      {({ errors, touched, handleSubmit, setFieldTouched, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <DraftailEditor
              entityTypes={[ENTITY_CONTROL.LINK]}
              onSave={setFieldValue.bind(null, "content")}
              onBlur={setFieldTouched.bind(null, "content")}
              stateSaveInterval={errors.content ? 50 : 250}
            />
            <div role="alert">
              {errors.content && touched.content && errors.content}
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  ))
  .add("Controlled component", () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    return (
      <EditorWrapper
        id="controlled-component"
        editorState={editorState}
        onChange={setEditorState}
        entityTypes={[ENTITY_CONTROL.LINK]}
        blockTypes={[BLOCK_CONTROL.UNORDERED_LIST_ITEM]}
        inlineStyles={[INLINE_CONTROL.BOLD]}
      />
    );
  });
