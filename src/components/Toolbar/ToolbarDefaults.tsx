import React, { PureComponent } from "react";
import { EditorState } from "draft-js";
import ToolbarButton from "./ToolbarButton";
import ToolbarGroup from "./ToolbarGroup";

import {
  BR_TYPE,
  ENTITY_TYPE,
  UNDO_TYPE,
  REDO_TYPE,
  DESCRIPTIONS,
  KnownFormatType,
} from "../../api/constants";
import behavior from "../../api/behavior";
import { getControlLabel, showControl } from "../../api/ui";
import {
  BlockTypeControl,
  BoolControl,
  CommandCategory,
  EntityTypeControl,
  InlineStyleControl,
} from "../../api/types";

export const getButtonTitle = (type: string, config: BoolControl) => {
  const description =
    typeof config === "boolean" || typeof config.description === "undefined"
      ? DESCRIPTIONS[type as KnownFormatType]
      : config.description;
  const hasShortcut = behavior.hasKeyboardShortcut(type);
  let title = description;

  if (hasShortcut) {
    const desc = description ? `${description}\n` : "";
    title = `${desc}${behavior.getKeyboardShortcut(type)}`;
  }

  return title;
};

/* eslint-disable react/no-unused-prop-types */
export interface ToolbarDefaultProps {
  currentStyles: {
    has: (style: string) => boolean;
  };
  currentBlock: string;
  currentBlockKey: string;
  enableHorizontalRule: BoolControl;
  enableLineBreak: BoolControl;
  showUndoControl: BoolControl;
  showRedoControl: BoolControl;
  entityTypes: ReadonlyArray<EntityTypeControl>;
  blockTypes: ReadonlyArray<BlockTypeControl>;
  inlineStyles: ReadonlyArray<InlineStyleControl>;
  commands: boolean | ReadonlyArray<CommandCategory>;
  toggleBlockType: (blockType: string) => void;
  toggleInlineStyle: (inlineStyle: string) => void;
  addHR: () => void;
  addBR: () => void;
  onUndoRedo: (type: string) => void;
  onRequestSource: (entityType: string) => void;
  onCompleteSource: (nextState: EditorState) => void;
  focus: () => void;
}

class ToolbarDefaults extends PureComponent<ToolbarDefaultProps> {
  render() {
    const {
      currentStyles,
      currentBlock,
      blockTypes,
      inlineStyles,
      enableHorizontalRule,
      enableLineBreak,
      showUndoControl,
      showRedoControl,
      entityTypes,
      toggleBlockType,
      toggleInlineStyle,
      addHR,
      addBR,
      onUndoRedo,
      onRequestSource,
    } = this.props;
    return [
      <ToolbarGroup key="styles" name="styles">
        {inlineStyles.filter(showControl).map((t) => (
          <ToolbarButton
            key={t.type}
            name={t.type}
            active={currentStyles.has(t.type)}
            label={getControlLabel(t.type, t)}
            title={getButtonTitle(t.type, t)}
            icon={t.icon}
            onClick={toggleInlineStyle}
          />
        ))}
      </ToolbarGroup>,

      <ToolbarGroup key="blocks" name="blocks">
        {blockTypes.filter(showControl).map((t) => (
          <ToolbarButton
            key={t.type}
            name={t.type}
            active={currentBlock === t.type}
            label={getControlLabel(t.type, t)}
            title={getButtonTitle(t.type, t)}
            icon={t.icon}
            onClick={toggleBlockType}
          />
        ))}
      </ToolbarGroup>,

      <ToolbarGroup key="hr-br" name="hr-br">
        {enableHorizontalRule ? (
          <ToolbarButton
            name={ENTITY_TYPE.HORIZONTAL_RULE}
            onClick={addHR}
            label={getControlLabel(
              ENTITY_TYPE.HORIZONTAL_RULE,
              enableHorizontalRule,
            )}
            title={getButtonTitle(
              ENTITY_TYPE.HORIZONTAL_RULE,
              enableHorizontalRule,
            )}
            icon={
              typeof enableHorizontalRule !== "boolean"
                ? enableHorizontalRule.icon
                : null
            }
          />
        ) : null}

        {enableLineBreak ? (
          <ToolbarButton
            name={BR_TYPE}
            onClick={addBR}
            label={getControlLabel(BR_TYPE, enableLineBreak)}
            title={getButtonTitle(BR_TYPE, enableLineBreak)}
            icon={
              typeof enableLineBreak !== "boolean" ? enableLineBreak.icon : null
            }
          />
        ) : null}
      </ToolbarGroup>,

      <ToolbarGroup key="entities" name="entities">
        {entityTypes.filter(showControl).map((t) => (
          <ToolbarButton
            key={t.type}
            name={t.type}
            onClick={onRequestSource}
            label={getControlLabel(t.type, t)}
            title={getButtonTitle(t.type, t)}
            icon={t.icon}
          />
        ))}
      </ToolbarGroup>,

      <ToolbarGroup key="undo-redo" name="undo-redo">
        {showUndoControl ? (
          <ToolbarButton
            name={UNDO_TYPE}
            onClick={onUndoRedo}
            label={getControlLabel(UNDO_TYPE, showUndoControl)}
            title={getButtonTitle(UNDO_TYPE, showUndoControl)}
            icon={
              typeof showUndoControl !== "boolean" ? showUndoControl.icon : null
            }
          />
        ) : null}

        {showRedoControl ? (
          <ToolbarButton
            name={REDO_TYPE}
            onClick={onUndoRedo}
            label={getControlLabel(REDO_TYPE, showRedoControl)}
            title={getButtonTitle(REDO_TYPE, showRedoControl)}
            icon={
              typeof showRedoControl !== "boolean" ? showRedoControl.icon : null
            }
          />
        ) : null}
      </ToolbarGroup>,
    ];
  }
}

export default ToolbarDefaults;
