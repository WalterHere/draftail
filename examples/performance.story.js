import { storiesOf } from "@storybook/react";
import React from "react";
import contentStates from "markov_draftjs";

import { DraftailEditor } from "../lib";

import { INLINE_CONTROL, BLOCK_CONTROL, ENTITY_CONTROL } from "./constants/ui";
import StatsGraph from "./components/StatsGraph";

const NB_EDITORS = 50;
const NB_EDITORS_LOW = 5;
const MAX_EDITORS = contentStates.length;

const benchmarkProps = {
  enableHorizontalRule: true,
  maxListNesting: 1,
  entityTypes: [
    ENTITY_CONTROL.LINK,
    ENTITY_CONTROL.IMAGE,
    ENTITY_CONTROL.DOCUMENT,
  ],
  blockTypes: [
    BLOCK_CONTROL.HEADER_TWO,
    BLOCK_CONTROL.HEADER_THREE,
    BLOCK_CONTROL.HEADER_FOUR,
    BLOCK_CONTROL.UNORDERED_LIST_ITEM,
    BLOCK_CONTROL.ORDERED_LIST_ITEM,
  ],
  inlineStyles: [INLINE_CONTROL.BOLD, INLINE_CONTROL.ITALIC],
};

const header = (
  <>
    <p>
      Enable the{" "}
      <a
        className="link"
        href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#fps-meter"
      >
        Chrome DevTools FPS meter
      </a>
    </p>
    <StatsGraph />
  </>
);

storiesOf("Performance", module)
  .add(`markov_draftjs 0-${NB_EDITORS_LOW}`, () => (
    <>
      {header}
      <>
        {contentStates.slice(0, NB_EDITORS_LOW).map((contentState, i) => (
          <DraftailEditor
            // eslint-disable-next-line @thibaudcolas/cookbook/react/no-array-index-key
            key={i}
            rawContentState={contentState}
            {...benchmarkProps}
          />
        ))}
      </>
    </>
  ))
  .add(`markov_draftjs 0-${NB_EDITORS}`, () => (
    <>
      {header}
      <>
        {contentStates.slice(0, NB_EDITORS).map((contentState, i) => (
          <DraftailEditor
            // eslint-disable-next-line @thibaudcolas/cookbook/react/no-array-index-key
            key={i}
            rawContentState={contentState}
            {...benchmarkProps}
          />
        ))}
      </>
    </>
  ))
  .add(`markov_draftjs ${MAX_EDITORS - NB_EDITORS_LOW}-${MAX_EDITORS}`, () => (
    <>
      {header}
      <>
        {contentStates.slice(-NB_EDITORS_LOW).map((contentState, i) => (
          <DraftailEditor
            // eslint-disable-next-line @thibaudcolas/cookbook/react/no-array-index-key
            key={i}
            rawContentState={contentState}
            {...benchmarkProps}
          />
        ))}
      </>
    </>
  ))
  .add(`markov_draftjs ${MAX_EDITORS - NB_EDITORS}-${MAX_EDITORS}`, () => (
    <>
      {header}
      <>
        {contentStates.slice(-NB_EDITORS).map((contentState, i) => (
          <DraftailEditor
            // eslint-disable-next-line @thibaudcolas/cookbook/react/no-array-index-key
            key={i}
            rawContentState={contentState}
            {...benchmarkProps}
          />
        ))}
      </>
    </>
  ));
