import { EditorState, ContentState, convertFromHTML } from "draft-js";

import { getValidLinkURL, onPasteLink } from "./Link";

const schemes = ["http:", "https:", "ftp:", "ftps:"];

describe.each`
  text                           | result
  ${"test@example.com"}          | ${"mailto:test@example.com"}
  ${"test@example"}              | ${false}
  ${"test@.com"}                 | ${false}
  ${"mailto:test@.com"}          | ${false}
  ${"example.com"}               | ${false}
  ${"http://example.com"}        | ${"http://example.com"}
  ${"https://example.com"}       | ${"https://example.com"}
  ${"ftp://example.com"}         | ${"ftp://example.com"}
  ${"ftps://example.com"}        | ${"ftps://example.com"}
  ${"//example.com"}             | ${false}
  ${"https://example.com/#test"} | ${"https://example.com/#test"}
  ${"example"}                   | ${false}
  ${"03069990000"}               | ${false}
  ${"tel:03069990000"}           | ${false}
  ${"file://test"}               | ${false}
`("getValidLinkURL", ({ text, result }) => {
  test(text, () => {
    expect(getValidLinkURL(text, schemes)).toBe(result);
  });
});

describe("onPasteLink", () => {
  let editorState;
  let setEditorState;

  beforeEach(() => {
    const { contentBlocks } = convertFromHTML("<p>hello</p>");
    const contentState = ContentState.createFromBlockArray(contentBlocks);
    editorState = EditorState.createWithContent(contentState);

    setEditorState = jest.fn((state) => state);
  });

  it("discards invalid URLs", () => {
    expect(
      onPasteLink("test", null, editorState, { setEditorState }, { schemes }),
    ).toBe("not-handled");
    expect(setEditorState).not.toHaveBeenCalled();
  });

  it("creates link onto selected text", () => {
    const selection = editorState.getSelection().merge({
      focusOffset: 4,
    });
    const selected = EditorState.forceSelection(editorState, selection);
    expect(
      onPasteLink(
        "https://example.com/selected",
        null,
        selected,
        { setEditorState },
        { schemes },
      ),
    ).toBe("handled");
    expect(setEditorState).toHaveBeenCalled();
    const content = setEditorState.mock.calls[0][0].getCurrentContent();
    expect(content.getFirstBlock().getText()).toBe("hello");
    expect(content.getFirstBlock().getText()).toBe("hello");
    expect(
      content.getEntity(content.getLastCreatedEntityKey()).getData().url,
    ).toBe("https://example.com/selected");
  });

  it("creates link with paste as link text when collapsed", () => {
    expect(
      onPasteLink(
        "https://example.com/collapsed",
        null,
        editorState,
        { setEditorState },
        { schemes },
      ),
    ).toBe("handled");
    expect(setEditorState).toHaveBeenCalled();
    const content = setEditorState.mock.calls[0][0].getCurrentContent();
    expect(content.getFirstBlock().getText()).toBe(
      "https://example.com/collapsedhello",
    );
    expect(
      content.getEntity(content.getLastCreatedEntityKey()).getData().url,
    ).toBe("https://example.com/collapsed");
  });
});