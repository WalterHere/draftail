import { storiesOf } from "@storybook/react";
import { RawDraftContentState } from "draft-js";
import React from "react";

import {
  INLINE_CONTROL,
  BLOCK_CONTROL,
  ENTITY_CONTROL,
  BR_ICON,
} from "./constants/ui";

import indexContentState from "./constants/indexContentState";

import PrismDecorator from "./components/PrismDecorator";
import EditorWrapper from "./components/EditorWrapper";

storiesOf("Draftail", module).add("Home", () => (
  <EditorWrapper
    id="index"
    rawContentState={indexContentState as RawDraftContentState}
    ariaDescribedBy="demo-editor-index"
    placeholder="Write here…"
    enableHorizontalRule
    enableLineBreak={{
      icon: BR_ICON,
    }}
    stripPastedStyles={false}
    decorators={[new PrismDecorator({ defaultLanguage: "javascript" })]}
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
  />
));
