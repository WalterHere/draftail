export default {
    entityMap: {
        '0': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'www.example.com' },
        },
        '1': {
            type: 'LINK',
            mutability: 'MUTABLE',
            data: { url: 'www.example.com' },
        },
        '2': { type: 'HORIZONTAL_RULE', mutability: 'IMMUTABLE', data: {} },
        '3': {
            type: 'IMAGE',
            mutability: 'IMMUTABLE',
            data: { alt: '', src: '../static/example-lowres-image.jpg' },
        },
    },
    blocks: [
        {
            key: 'b4b1l',
            text: 'Unstyled',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '5fe05',
            text: 'Bold: Bold',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 6, length: 4, style: 'BOLD' }],
            entityRanges: [],
            data: {},
        },
        {
            key: '8s9c9',
            text: 'Italic: Italic',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 8, length: 6, style: 'ITALIC' }],
            entityRanges: [],
            data: {},
        },
        {
            key: 'bsn0',
            text: 'Code: Code',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 6, length: 4, style: 'CODE' }],
            entityRanges: [],
            data: {},
        },
        {
            key: 'caaab',
            text: 'Underline: Underline',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 11, length: 9, style: 'UNDERLINE' }],
            entityRanges: [],
            data: {},
        },
        {
            key: 'a1q8d',
            text: 'Strikethrough: Strikethrough',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [
                { offset: 15, length: 13, style: 'STRIKETHROUGH' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: '9q28a',
            text: 'Mark: Mark',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 6, length: 4, style: 'MARK' }],
            entityRanges: [],
            data: {},
        },
        {
            key: '60kjj',
            text: 'Quotation: Quotation',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 11, length: 9, style: 'QUOTATION' }],
            entityRanges: [],
            data: {},
        },
        {
            key: '4oejq',
            text: 'Small: Small',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 7, length: 5, style: 'SMALL' }],
            entityRanges: [],
            data: {},
        },
        {
            key: 'djoon',
            text: 'Sample: Sample',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 8, length: 6, style: 'SAMPLE' }],
            entityRanges: [],
            data: {},
        },
        {
            key: '51v2q',
            text: 'Insert: Insert',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 8, length: 6, style: 'INSERT' }],
            entityRanges: [],
            data: {},
        },
        {
            key: 'dcu10',
            text: 'Delete: Delete',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 8, length: 6, style: 'DELETE' }],
            entityRanges: [],
            data: {},
        },
        {
            key: '61c9t',
            text: 'Keyboard: Keyboard',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 10, length: 8, style: 'KEYBOARD' }],
            entityRanges: [],
            data: {},
        },
        {
            key: 'dk2v',
            text: 'Superscript: Superscript',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [
                { offset: 13, length: 11, style: 'SUPERSCRIPT' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: '5pr5s',
            text: 'Subscript: Subscript',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 11, length: 9, style: 'SUBSCRIPT' }],
            entityRanges: [],
            data: {},
        },
        {
            key: '6i47q',
            text: 'Unstyled link',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 9, length: 4, key: 0 }],
            data: {},
        },
        {
            key: 'a73ur',
            text: 'Unstyled bold italic, bold code',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [
                { offset: 9, length: 11, style: 'BOLD' },
                { offset: 22, length: 9, style: 'BOLD' },
                { offset: 9, length: 11, style: 'ITALIC' },
                { offset: 22, length: 9, style: 'CODE' },
            ],
            entityRanges: [],
            data: {},
        },
        {
            key: 'dv35p',
            text: 'Unstyled bold link',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [{ offset: 9, length: 9, style: 'BOLD' }],
            entityRanges: [{ offset: 9, length: 9, key: 1 }],
            data: {},
        },
        {
            key: 'h3id',
            text: 'Header one',
            type: 'header-one',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '3k5je',
            text: 'Header two',
            type: 'header-two',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '4mv7l',
            text: 'Header three',
            type: 'header-three',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '2ulum',
            text: 'Header four',
            type: 'header-four',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'fdif3',
            text: 'Header five',
            type: 'header-five',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'f1g6d',
            text: 'Header six',
            type: 'header-six',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'cm3n2',
            text: 'Unordered list item',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'ct6kt',
            text: 'Ordered list item',
            type: 'ordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'fu7tq',
            text: 'Blockquote',
            type: 'blockquote',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '9fh29',
            text: 'Code',
            type: 'code-block',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '8135g',
            text: 'Horizontal rule',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'epoas',
            text: ' ',
            type: 'atomic',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 0, length: 1, key: 2 }],
            data: {},
        },
        {
            key: '988fv',
            text: 'Soft line\nbreak',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '7dro2',
            text: 'Image',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '3d071',
            text: ' ',
            type: 'atomic',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [{ offset: 0, length: 1, key: 3 }],
            data: {},
        },
        {
            key: '3fi60',
            text: '0',
            type: 'unordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'drrdt',
            text: '1',
            type: 'unordered-list-item',
            depth: 1,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'amrfc',
            text: '2',
            type: 'unordered-list-item',
            depth: 2,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'f2aq6',
            text: '3',
            type: 'unordered-list-item',
            depth: 3,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'dm1ha',
            text: '4',
            type: 'unordered-list-item',
            depth: 4,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '3tj8v',
            text: '5',
            type: 'unordered-list-item',
            depth: 5,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'aj8f6',
            text: '6',
            type: 'unordered-list-item',
            depth: 6,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '9feac',
            text: '7',
            type: 'unordered-list-item',
            depth: 6,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '8luln',
            text: '0',
            type: 'ordered-list-item',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'fkp2f',
            text: '1',
            type: 'ordered-list-item',
            depth: 1,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '5db68',
            text: '2',
            type: 'ordered-list-item',
            depth: 2,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '8p6ig',
            text: '3',
            type: 'ordered-list-item',
            depth: 3,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '8180l',
            text: '4',
            type: 'ordered-list-item',
            depth: 4,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '9qbuu',
            text: '5',
            type: 'ordered-list-item',
            depth: 5,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'fi7oh',
            text: '6',
            type: 'ordered-list-item',
            depth: 6,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: '3vtis',
            text: '7',
            type: 'ordered-list-item',
            depth: 6,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
        {
            key: 'ad8cq',
            text: 'End',
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
        },
    ],
};
