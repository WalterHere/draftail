export default {
    entityMap: {
        '0': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://github.com/facebook/draft-js' },
        },
        '1': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://support.google.com/docs/answer/179738' },
        },
        '2': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://en.wikipedia.org/wiki/Markdown' },
        },
        '3': { type: 'HORIZONTAL_RULE', mutability: 'IMMUTABLE', data: {} },
        '4': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: {
                url:
                    'https://github.com/springload/draftail/tree/master/docs#keyboard-shortcuts',
            },
        },
        '5': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://www.springload.co.nz/' },
        },
        '6': {
            type: 'IMAGE',
            mutability: 'IMMUTABLE',
            data: {
                alt: 'Test image alt text',
                alignment: 'left',
                src: 'static/example-image.png',
            },
        },
        '7': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'http://embed.ly/' },
        },
        '8': {
            type: 'EMBED',
            mutability: 'IMMUTABLE',
            data: {
                url: 'http://www.youtube.com/watch?v=feUYwoLhE_4',
                title:
                    'React.js Conf 2016 - Isaac Salier-Hellendag - Rich Text Editing with React',
                providerName: 'YouTube',
                authorName: 'Facebook Developers',
                thumbnail: 'https://i.ytimg.com/vi/feUYwoLhE_4/hqdefault.jpg',
            },
        },
        '9': { type: 'HORIZONTAL_RULE', mutability: 'IMMUTABLE', data: {} },
        '10': { type: 'HORIZONTAL_RULE', mutability: 'IMMUTABLE', data: {} },
        '11': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://github.com/springload/draftail' },
        },
        '12': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: {
                url: 'https://github.com/springload/draftail#getting-started',
            },
        },
        '13': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://github.com/springload/draftail#polyfills' },
        },
        '14': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://github.com/springload/draftail' },
        },
        '15': { type: 'HORIZONTAL_RULE', mutability: 'IMMUTABLE', data: {} },
        '16': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://github.com/springload/draftail/issues' },
        },
        '17': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://github.com/springload/draftjs_exporter' },
        },
        '18': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://github.com/springload/wagtaildraftail' },
        },
        '19': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://github.com/springload/' },
        },
        '20': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://wagtail.io/' },
        },
        '21': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'https://twitter.com/thibaud_colas' },
        },
    },
    blocks: [
        {
            key: 'b0ei9',
            text: 'Draftail is an editor built with Draft.js',
            type: 'header-two',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 33, length: 8, key: 0 }],
            data: {},
        },
        {
            key: '74al',
            text: 'Try it out by editing this text!',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '7htbd',
            text: 'Features 📝🍸',
            type: 'header-three',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '32lnv',
            text:
                'Draftail aims for a mouse-free experience. Most formatting can be done with keyboard shortcuts only, inspired by Google Docs and Markdown.',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [
                { offset: 113, length: 11, key: 1 },
                { offset: 129, length: 8, key: 2 },
            ],
            data: {},
        },
        {
            key: 'a15ts',
            text: ' ',
            type: 'atomic',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 0, length: 1, key: 3 }],
            data: {},
        },
        {
            key: 'ejqsd',
            text: 'Here are important features worth highlighting:',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '2mhgt',
            text: 'Support for keyboard shortcuts. Lots of them!',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 12, length: 18, key: 4 }],
            data: {},
        },
        {
            key: 'f4gp0',
            text:
                'Autolists – start a line with -, *, 1. to create a list item.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [
                { offset: 30, length: 1, style: 'KEYBOARD' },
                { offset: 33, length: 1, style: 'KEYBOARD' },
                { offset: 36, length: 2, style: 'KEYBOARD' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: '9pkgn',
            text: 'Shortcuts for heading levels ##, code blocks ```, and more.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [
                { offset: 29, length: 2, style: 'KEYBOARD' },
                { offset: 45, length: 3, style: 'KEYBOARD' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: 'cum79',
            text: 'Undo / redo – until the end of times.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '3cnm0',
            text: 'Common text types: headings, paragraphs, quotes, lists.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '5qfeb',
            text: 'Common text styles: Bold, Italic, and many more.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [
                { offset: 20, length: 4, style: 'BOLD' },
                { offset: 26, length: 6, style: 'ITALIC' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: '8br3k',
            text: 'Built-in controls for links and documents.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 22, length: 5, key: 5 }],
            data: {},
        },
        {
            key: '2j2hl',
            text: 'Built-in image and embed blocks.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '3tbpg',
            text: ' ',
            type: 'atomic',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 0, length: 1, key: 6 }],
            data: {},
        },
        {
            key: 'eb00n',
            text: 'The embeds in this example are powered by Embedly:',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 42, length: 7, key: 7 }],
            data: {},
        },
        {
            key: 'f7s8c',
            text: ' ',
            type: 'atomic',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 0, length: 1, key: 8 }],
            data: {},
        },
        {
            key: '5t6c9',
            text: 'Try out some of the shortcuts:',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'df4ie',
            text: 'Apply H3 heading style: ### and Space.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [
                { offset: 6, length: 2, style: 'BOLD' },
                { offset: 24, length: 3, style: 'KEYBOARD' },
                { offset: 32, length: 5, style: 'KEYBOARD' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: '101cm',
            text: 'Make a list item: - and Space.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [
                { offset: 18, length: 1, style: 'KEYBOARD' },
                { offset: 24, length: 5, style: 'KEYBOARD' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: 'c5ufd',
            text:
                "Use traditional combinations if that's your thing: ctrl + shift + 8, or ⌘ + shift + 8 on Mac.",
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [
                { offset: 51, length: 4, style: 'KEYBOARD' },
                { offset: 58, length: 5, style: 'KEYBOARD' },
                { offset: 66, length: 1, style: 'KEYBOARD' },
                { offset: 72, length: 1, style: 'KEYBOARD' },
                { offset: 76, length: 5, style: 'KEYBOARD' },
                { offset: 84, length: 1, style: 'KEYBOARD' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: '8urvn',
            text: 'Increase list indentation: tab.',
            type: 'unordered-list-item',
            depth: 1,
            inlineStyleRanges: [{ offset: 27, length: 3, style: 'KEYBOARD' }],
            entityRanges: [],
            data: {},
        },
        {
            key: '2km89',
            text: 'Insert or edit a link: ctrl + K or ⌘ + K.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [
                { offset: 23, length: 4, style: 'KEYBOARD' },
                { offset: 30, length: 1, style: 'KEYBOARD' },
                { offset: 35, length: 1, style: 'KEYBOARD' },
                { offset: 39, length: 1, style: 'KEYBOARD' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: '12df8',
            text: 'Open a link or document: alt + enter or option + enter.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [
                { offset: 25, length: 3, style: 'KEYBOARD' },
                { offset: 31, length: 5, style: 'KEYBOARD' },
                { offset: 40, length: 6, style: 'KEYBOARD' },
                { offset: 49, length: 5, style: 'KEYBOARD' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: '3gbli',
            text: ' ',
            type: 'atomic',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 0, length: 1, key: 9 }],
            data: {},
        },
        {
            key: 'bqj71',
            text: 'Using Draftail 🚀',
            type: 'header-two',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '2nb2a',
            text:
                'Draftail is meant to be used in scenarios where not all formatting should be available, and where custom formatting can be necessary.',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '5a6fr',
            text:
                'Available formats, built-in and custom, can be specificed declaratively for each editor instance.',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '26mu7',
            text: 'Built-in formats',
            type: 'header-three',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '9mda0',
            text:
                'Block types: H1, H2, H3, H4, H5, H6, Blockquote, Code, UL, OL, P',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '6h6as',
            text:
                'Inline styles: Bold, Italic, Underline, Code, Strikethrough, Mark, Keyboard, Superscript, Subscript',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '3haur',
            text:
                'Entities (things with data): Images, Embeds, Links, Documents',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'dnji2',
            text: 'And HR, BR',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'fgg07',
            text: ' ',
            type: 'atomic',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 0, length: 1, key: 10 }],
            data: {},
        },
        {
            key: 'd5k22',
            text: 'Custom formats',
            type: 'header-three',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'bo4ov',
            text:
                'Your mileage may vary! There is good support for custom block-level and inline formatting. Custom entities or decorators require knowledge of the Draft.js API, which is very low-level.',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'f5an6',
            text:
                'Be sure to check out the full documentation on GitHub for API details, and if you are having trouble please open an issue.',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 44, length: 9, key: 11 }],
            data: {},
        },
        {
            key: 'dgi85',
            text: 'Getting started',
            type: 'header-two',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '5c69u',
            text:
                'Make sure to first install the editor, and check out required polyfills.',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [
                { offset: 19, length: 18, key: 12 },
                { offset: 53, length: 18, key: 13 },
            ],
            data: {},
        },
        {
            key: '71mag',
            text: "import React from 'react';",
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '9rkr5',
            text: "import ReactDOM from 'react-dom';",
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'avp7v',
            text:
                "import DraftailEditor, { BLOCK_TYPE, INLINE_STYLE } from 'draftail';",
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '2do8q',
            text: '',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '6q44b',
            text:
                "const initial = JSON.parse(sessionStorage.getItem('draftail:content'));",
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [
                { offset: 0, length: 5, style: 'ITALIC' },
                { offset: 16, length: 4, style: 'ITALIC' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: 'ddeeu',
            text: '',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '75vkl',
            text: 'const onSave = content => {',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [
                { offset: 0, length: 5, style: 'ITALIC' },
                { offset: 23, length: 2, style: 'ITALIC' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: '9b7qa',
            text: "    console.log('saving', content);",
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [{ offset: 4, length: 7, style: 'ITALIC' }],
            entityRanges: [],
            data: {},
        },
        {
            key: 'aiuh4',
            text:
                "    sessionStorage.setItem('draftail:content', JSON.stringify(content));\n};",
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [{ offset: 47, length: 4, style: 'ITALIC' }],
            entityRanges: [],
            data: {},
        },
        {
            key: 'clc4f',
            text:
                'The above code imports required dependencies and saves / retrieves the content to sessionStorage.',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'fot50',
            text: 'Then, we declare the editor with its configuration:',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '4en18',
            text: 'const editor = (',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [{ offset: 0, length: 5, style: 'ITALIC' }],
            entityRanges: [],
            data: {},
        },
        {
            key: 'a00d5',
            text: '    <DraftailEditor',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [{ offset: 5, length: 14, style: 'ITALIC' }],
            entityRanges: [],
            data: {},
        },
        {
            key: 'bvhva',
            text: '        rawContentState={initial || null}',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '7f1hg',
            text: '        onSave={onSave}',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '16qq5',
            text: '        blockTypes={[',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '7jv1j',
            text: "            { type: BLOCK_TYPE.HEADER_THREE, label: 'H3' },",
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'ajlgl',
            text:
                "            { type: BLOCK_TYPE.UNORDERED_LIST_ITEM, label: 'UL' },",
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'e7039',
            text: '        ]}',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'b2snl',
            text: '        inlineStyles={[',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '4euun',
            text: "            { type: INLINE_STYLE.BOLD, label: 'B' },",
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '9b9ak',
            text: "            { type: INLINE_STYLE.ITALIC, label: 'I' },",
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '60g50',
            text: '        ]}',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'evb3a',
            text: '    />\n);',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '48qst',
            text: '',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'ba5ve',
            text:
                "ReactDOM.render(editor, document.querySelector('[data-mount]'));",
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '99k19',
            text:
                'This just scratches the surface, head to the project repository to check out all of the options.',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 45, length: 18, key: 14 }],
            data: {},
        },
        {
            key: 'fdm1v',
            text: ' ',
            type: 'atomic',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 0, length: 1, key: 15 }],
            data: {},
        },
        {
            key: 'bl3k3',
            text: 'Contributing',
            type: 'header-two',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'bvo7q',
            text:
                'See anything you like in here? Anything missing? We welcome all support, whether on bug reports, feature requests, code, design, reviews, tests, documentation, and more. Have a look at our issue tracker and start the conversation.',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 189, length: 13, key: 16 }],
            data: {},
        },
        {
            key: '9p5g8',
            text:
                'If you want to learn more about how we are using this, check out:',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '3ptim',
            text: 'draftjs_exporter, the Python Draft.js to HTML exporter.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 0, length: 16, key: 17 }],
            data: {},
        },
        {
            key: 'au3cv',
            text: 'WagtailDraftail, an integration of Draftail into Wagtail.',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 0, length: 15, key: 18 }],
            data: {},
        },
        {
            key: '8258a',
            text: '',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '78s4d',
            text: 'Credits',
            type: 'header-two',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'blo0j',
            text:
                'Draftail is made possible by the work of Springload, a New Zealand digital agency, and core contributors to the Wagtail CMS. This beautiful demo site is the work of @thibaud_colas.',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 130, length: 9, style: 'ITALIC' }],
            entityRanges: [
                { offset: 41, length: 10, key: 19 },
                { offset: 112, length: 7, key: 20 },
                { offset: 165, length: 14, key: 21 },
            ],
            data: {},
        },
    ],
};
