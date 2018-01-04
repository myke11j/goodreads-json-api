'use strict'

const cheerio = require('cheerio');
const async = require('async');
const transformer = require('./transformer');
const helpers = require('./helpers');
const goodReadsJSONResponse = {};
const options = {
    xml: {
        normalizeWhitespace: true
    }
};

const transform = (params) => {
    const { $, transformer, doc, prevNode } = params;
    let parentNode = '';
    if (prevNode) {
        parentNode += prevNode + ' ';
    }
    transformer.mapping.forEach((mapItem) => {
        const xmlNode = parentNode + transformer.type + ' ' + mapItem.key;
        // console.log(xmlNode, $(xmlNode).html());
        doc[mapItem.jsonKey] = $(xmlNode).html();
        if (mapItem.helper && helpers[mapItem.helper]) {
            doc[mapItem.jsonKey] = helpers[mapItem.helper](doc[mapItem.jsonKey]);
        }
    });
};

const transformList = (params) => {
    const { $, transformer, doc, prevNode } = params;
    let parentNode = '';
    if (prevNode) {
        parentNode += prevNode + ' ';
    }
    const count = $(parentNode).find(transformer.type).slice(0, 30);
    for (var index = 0; index < count.length; index++) {
        const dummyDoc = {};
        transformer.mapping.forEach((mapItem) => {
            dummyDoc[mapItem.jsonKey] = $(parentNode).find(transformer.type)[index].attribs[mapItem.key];
            if (mapItem.helper && helpers[mapItem.helper]) {
                dummyDoc[mapItem.jsonKey] = helpers[mapItem.helper](dummyDoc[mapItem.jsonKey]);
            }
        });
        doc[prevNode].push(dummyDoc);
    }
}

const transformBooks = function (params) {
    const { $, transformer, prevNode, doc, rootTtransformer } = params;
    let parentNode = '';
    if (prevNode) {
        parentNode += prevNode + ' ';
    }
    const similiarBooks = $(parentNode).html().toString().split('<book>').slice(0, 5);
    async.eachSeries(similiarBooks, (element, cb) => {
        if (element.length === 1) return cb();
        let book = {};
        transform({
            transformer, doc: book, $: cheerio.load('<book>' + element, options)
        });
        doc.push(book);
        cb();
    }, (err) => {
        return true;
    });
}

goodReadsJSONResponse.convertToJson = (xmlData) => {
    const $ = cheerio.load(xmlData, options);
    let response = {};
    transformer.mappings.forEach((item, index) => {
        const type = item.type;
        let element = type;
        if ($(element).html() === null) return;
        // const resp = response[element];
        const mapping = item.mapping;
        mapping.forEach((mapItem, index2) => {
            switch (element) {
                case 'popular_shelves':
                    if ($('popular_shelves').find('shelf').length <= 0) return;
                    response[element] = [];
                    transformList({
                        transformer: transformer.mappings.filter(mapping => mapping.type === 'shelf')[0],
                        doc: response,
                        $,
                        prevNode: 'popular_shelves'
                    });
                    break;
                case 'similar_books':
                    if ($('similar_books').find('book').length <= 0) return;
                    response[element] = [];
                    const cloneDoc = JSON.parse(JSON.stringify(response[element]));
                    transformBooks({
                        transformer: transformer.mappings.filter(mapping => mapping.type === 'book')[0],
                        doc: cloneDoc,
                        $,
                        prevNode: 'similar_books',
                        rootTtransformer: transformer
                    });
                    response[element] = cloneDoc;
                    break;
                default:
                    response[element] = {};
                    const cloneDoc2 = JSON.parse(JSON.stringify(response[element]));
                    transform({
                        transformer: item, doc: cloneDoc2, $
                    });
                    response[element] = cloneDoc2;
                    break;
            }
        });
    });
    return response;
};
// 
module.exports = goodReadsJSONResponse;
