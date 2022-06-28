import * as constants from "./constants";

describe("constants", () => {
  it("has them all", () =>
    expect(constants).toMatchInlineSnapshot(`
      Object {
        "BLOCK_TYPE": Object {
          "ATOMIC": "atomic",
          "BLOCKQUOTE": "blockquote",
          "CODE": "code-block",
          "HEADER_FIVE": "header-five",
          "HEADER_FOUR": "header-four",
          "HEADER_ONE": "header-one",
          "HEADER_SIX": "header-six",
          "HEADER_THREE": "header-three",
          "HEADER_TWO": "header-two",
          "ORDERED_LIST_ITEM": "ordered-list-item",
          "UNORDERED_LIST_ITEM": "unordered-list-item",
          "UNSTYLED": "unstyled",
        },
        "BR_TYPE": "BR",
        "CUSTOM_STYLE_MAP": Object {
          "BOLD": Object {
            "fontWeight": "bold",
          },
          "CODE": Object {
            "backgroundColor": "rgba(27, 31, 35, 0.05)",
            "borderRadius": "3px",
            "fontFamily": "Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, sans-serif",
            "fontSize": "85%",
            "margin": "0",
            "padding": "0.2em 0.3125em",
          },
          "DELETE": Object {
            "textDecoration": "line-through",
          },
          "INSERT": Object {
            "textDecoration": "underline",
          },
          "ITALIC": Object {
            "fontStyle": "italic",
          },
          "KEYBOARD": Object {
            "backgroundColor": "#fafbfc",
            "border": "solid 1px #c6cbd1",
            "borderBottomColor": "#959da5",
            "borderRadius": "3px",
            "boxShadow": "inset 0 -1px 0 #959da5",
            "color": "#444d56",
            "fontFamily": "Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, sans-serif",
            "fontSize": "11px",
            "lineHeight": "10px",
            "padding": "3px 5px",
            "verticalAlign": "middle",
          },
          "MARK": Object {
            "backgroundColor": "yellow",
          },
          "QUOTATION": Object {
            "fontStyle": "italic",
          },
          "SAMPLE": Object {
            "fontFamily": "Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, sans-serif",
          },
          "SMALL": Object {
            "fontSize": "smaller",
          },
          "STRIKETHROUGH": Object {
            "textDecoration": "line-through",
          },
          "SUBSCRIPT": Object {
            "fontSize": "80%",
            "lineHeight": "1",
            "verticalAlign": "sub",
          },
          "SUPERSCRIPT": Object {
            "fontSize": "80%",
            "lineHeight": "1",
            "verticalAlign": "super",
          },
          "UNDERLINE": Object {
            "textDecoration": "underline",
          },
        },
        "DESCRIPTIONS": Object {
          "BOLD": "Bold",
          "BR": "Line break",
          "CODE": "Code",
          "DELETE": "Deleted",
          "HORIZONTAL_RULE": "Horizontal line",
          "IMAGE": "Image",
          "INSERT": "Inserted",
          "ITALIC": "Italic",
          "KEYBOARD": "Shortcut key",
          "LINK": "Link",
          "MARK": "Highlight",
          "QUOTATION": "Inline quotation",
          "SAMPLE": "Program output",
          "SMALL": "Small",
          "STRIKETHROUGH": "Strikethrough",
          "SUBSCRIPT": "Subscript",
          "SUPERSCRIPT": "Superscript",
          "UNDERLINE": "Underline",
          "blockquote": "Blockquote",
          "code-block": "Code block",
          "header-five": "Heading 5",
          "header-four": "Heading 4",
          "header-one": "Heading 1",
          "header-six": "Heading 6",
          "header-three": "Heading 3",
          "header-two": "Heading 2",
          "ordered-list-item": "Numbered list",
          "redo": "Redo",
          "undo": "Undo",
          "unordered-list-item": "Bulleted list",
          "unstyled": "Paragraph",
        },
        "ENTITY_TYPE": Object {
          "HORIZONTAL_RULE": "HORIZONTAL_RULE",
          "IMAGE": "IMAGE",
          "LINK": "LINK",
        },
        "FONT_FAMILY_MONOSPACE": "Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, sans-serif",
        "HANDLED": "handled",
        "INLINE_STYLE": Object {
          "BOLD": "BOLD",
          "CODE": "CODE",
          "DELETE": "DELETE",
          "INSERT": "INSERT",
          "ITALIC": "ITALIC",
          "KEYBOARD": "KEYBOARD",
          "MARK": "MARK",
          "QUOTATION": "QUOTATION",
          "SAMPLE": "SAMPLE",
          "SMALL": "SMALL",
          "STRIKETHROUGH": "STRIKETHROUGH",
          "SUBSCRIPT": "SUBSCRIPT",
          "SUPERSCRIPT": "SUPERSCRIPT",
          "UNDERLINE": "UNDERLINE",
        },
        "INPUT_BLOCK_MAP": Object {
          "# ": "header-one",
          "## ": "header-two",
          "### ": "header-three",
          "#### ": "header-four",
          "##### ": "header-five",
          "###### ": "header-six",
          "* ": "unordered-list-item",
          "- ": "unordered-list-item",
          "1. ": "ordered-list-item",
          "> ": "blockquote",
          "\`\`\`": "code-block",
        },
        "INPUT_ENTITY_MAP": Object {
          "HORIZONTAL_RULE": "---",
        },
        "INPUT_STYLE_MAP": Array [
          Object {
            "pattern": "**",
            "regex": "(\\\\s|^)\\\\*\\\\*([^\\\\s\\\\*]{1,2}|[^\\\\s\\\\*].+[^\\\\s\\\\*])\\\\*\\\\*$",
            "type": "BOLD",
          },
          Object {
            "pattern": "__",
            "regex": "(\\\\s|^)__([^\\\\s_]{1,2}|[^\\\\s_].+[^\\\\s_])__$",
            "type": "BOLD",
          },
          Object {
            "pattern": "*",
            "regex": "(\\\\s|^)\\\\*([^\\\\s\\\\*]{1,2}|[^\\\\s\\\\*].+[^\\\\s\\\\*])\\\\*$",
            "type": "ITALIC",
          },
          Object {
            "pattern": "_",
            "regex": "(\\\\s|^)_([^\\\\s_]{1,2}|[^\\\\s_].+[^\\\\s_])_$",
            "type": "ITALIC",
          },
          Object {
            "pattern": "~~",
            "regex": "(\\\\s|^)~~([^\\\\s~]{1,2}|[^\\\\s~].+[^\\\\s~])~~$",
            "type": "STRIKETHROUGH",
          },
          Object {
            "pattern": "~",
            "regex": "(\\\\s|^)~([^\\\\s~]{1,2}|[^\\\\s~].+[^\\\\s~])~$",
            "type": "STRIKETHROUGH",
          },
          Object {
            "pattern": "\`",
            "regex": "(\\\\s|^)\`([^\\\\s\`]{1,2}|[^\\\\s\`].+[^\\\\s\`])\`$",
            "type": "CODE",
          },
        ],
        "KEYBOARD_SHORTCUTS": Object {
          "BOLD": Object {
            "macOS": "⌘ + B",
            "other": "Ctrl + B",
          },
          "BR": "⇧ + ↵",
          "HORIZONTAL_RULE": "- - -",
          "ITALIC": Object {
            "macOS": "⌘ + I",
            "other": "Ctrl + I",
          },
          "LINK": Object {
            "macOS": "⌘ + K",
            "other": "Ctrl + K",
          },
          "STRIKETHROUGH": Object {
            "macOS": "⌘ + ⇧ + X",
            "other": "Ctrl + ⇧ + X",
          },
          "SUBSCRIPT": Object {
            "macOS": "⌘ + ,",
            "other": "Ctrl + ,",
          },
          "SUPERSCRIPT": Object {
            "macOS": "⌘ + .",
            "other": "Ctrl + .",
          },
          "UNDERLINE": Object {
            "macOS": "⌘ + U",
            "other": "Ctrl + U",
          },
          "blockquote": ">",
          "code-block": "\`\`\`",
          "header-five": "#####",
          "header-four": "####",
          "header-one": "#",
          "header-six": "######",
          "header-three": "###",
          "header-two": "##",
          "ordered-list-item": "1.",
          "redo": Object {
            "macOS": "⌘ + ⇧ + Z",
            "other": "Ctrl + ⇧ + Z",
          },
          "undo": Object {
            "macOS": "⌘ + Z",
            "other": "Ctrl + Z",
          },
          "unordered-list-item": "-",
          "unstyled": "⌫",
        },
        "KEY_CODES": Object {
          ",": 188,
          ".": 190,
          "0": 48,
          "1": 49,
          "2": 50,
          "3": 51,
          "4": 52,
          "5": 53,
          "6": 54,
          "7": 55,
          "8": 56,
          "B": 66,
          "I": 73,
          "J": 74,
          "K": 75,
          "U": 85,
          "X": 88,
        },
        "KEY_COMMANDS": Array [
          "unstyled",
          "header-one",
          "header-two",
          "header-three",
          "header-four",
          "header-five",
          "header-six",
          "unordered-list-item",
          "ordered-list-item",
          "blockquote",
          "code-block",
          "atomic",
          "LINK",
          "IMAGE",
          "HORIZONTAL_RULE",
          "BOLD",
          "ITALIC",
          "CODE",
          "UNDERLINE",
          "STRIKETHROUGH",
          "MARK",
          "QUOTATION",
          "SMALL",
          "SAMPLE",
          "INSERT",
          "DELETE",
          "KEYBOARD",
          "SUPERSCRIPT",
          "SUBSCRIPT",
          "bold",
          "italic",
          "underline",
          "code",
        ],
        "LABELS": Object {
          "BOLD": "𝐁",
          "BR": "↵",
          "CODE": "{ }",
          "DELETE": "Del",
          "HORIZONTAL_RULE": "―",
          "IMAGE": "🖼",
          "INSERT": "Ins",
          "ITALIC": "𝘐",
          "KEYBOARD": "⌘",
          "LINK": "🔗",
          "MARK": "☆",
          "QUOTATION": "❛",
          "SAMPLE": "Data",
          "SMALL": "Small",
          "STRIKETHROUGH": "S",
          "SUBSCRIPT": "Sub",
          "SUPERSCRIPT": "Sup",
          "UNDERLINE": "U",
          "blockquote": "❝",
          "code-block": "{ }",
          "header-five": "H5",
          "header-four": "H4",
          "header-one": "H1",
          "header-six": "H6",
          "header-three": "H3",
          "header-two": "H2",
          "ordered-list-item": "OL",
          "redo": "↻",
          "undo": "↺",
          "unordered-list-item": "UL",
          "unstyled": "P",
        },
        "NOT_HANDLED": "not-handled",
        "REDO_TYPE": "redo",
        "UNDO_TYPE": "undo",
      }
    `));
});