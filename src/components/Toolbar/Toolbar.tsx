import React from "react";
import { EditorState } from "draft-js";

import { ControlControl, LegacyControlControl } from "../../api/types";

import ToolbarDefaults, { ToolbarDefaultProps } from "./ToolbarDefaults";
import ToolbarGroup from "./ToolbarGroup";

export interface ToolbarProps extends ToolbarDefaultProps {
  controls: ReadonlyArray<ControlControl | LegacyControlControl>;
  getEditorState: () => EditorState;
  onChange: (state: EditorState) => void;
  className?: string;
}

const Toolbar = ({
  controls,
  getEditorState,
  onChange,
  className,
  ...otherProps
}: ToolbarProps) => (
  <div className={`Draftail-Toolbar ${className || ""}`} role="toolbar">
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <ToolbarDefaults {...otherProps} />

    <ToolbarGroup name="controls">
      {controls.map((control, i) => {
        if (control.meta) {
          return null;
        }

        const Control =
          control.block || control.inline || (control as LegacyControlControl);

        return (
          <Control
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            getEditorState={getEditorState}
            onChange={onChange}
          />
        );
      })}
    </ToolbarGroup>
  </div>
);

export default Toolbar;
