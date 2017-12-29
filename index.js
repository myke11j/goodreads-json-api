'use strict'

const cheerio = require('cheerio');

const transformer = require('./transformer');
const helpers = require('./helpers');
const goodReadsJSONResponse = {};

const transform = (params) => {
    const { $, transformer, doc, prevNode } = params;
    let parentNode = '';
    if (prevNode) {
        parentNode += prevNode + ' ';
    }
    transformer.mapping.forEach((mapItem) => {
        const xmlNode = parentNode + transformer.type + ' ' + mapItem.key;
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

const transformBooks = (params) => {
    const { $, transformer, prevNode, doc, rootTtransformer } = params;
    let parentNode = '';
    if (prevNode) {
        parentNode += prevNode + ' ';
    }
    const count = $(parentNode).find(transformer.type).slice(0, 3);
    for (var index = 0; index < count.length; index++) {
        console.log($(parentNode).find(transformer.type)[index].children[index].name);
    }
    // doc.push();
}

goodReadsJSONResponse.convertToJson = (xmlData) => {
    const options = {
        xml: {
            normalizeWhitespace: true
        }
    };
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
                    // if ($('similar_books').find('book').length <= 0) return;
                    // response[element] = [];
                    // const cloneDoc = JSON.parse(JSON.stringify(response[element]));
                    // transformBooks({
                    //     transformer: transformer.mappings.filter(mapping => mapping.type === 'book')[0],
                    //     doc: cloneDoc,
                    //     $,
                    //     prevNode: 'similar_books',
                    //     rootTtransformer: transformer
                    // });
                    // response[element] = cloneDoc;
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
            // if (element === 'popular_shelves') {
                // transform({
                //     transformer: item, doc: resp, $, prevNode: 'popular_shelves'
                // });
                // if ($('popular_shelves').find('shelf').length <= 0) return;
                // if (mapItem.helper && helpers[mapItem.helper]) {
                //     resp[mapItem.jsonKey] = helpers[mapItem.helper]($('popular_shelves').find('shelf'));
                // }
            // } 
            // else if (element === 'similar_books') {
            //     if ($('similar_books').find('book').length <= 0) return;
            //     const trans2 = transformer.mappings.filter(mapping => mapping.type === mapItem.transformer)[0];
                // transform({
                //     transformer: trans2, doc: resp, $, prevNode: 'similar_books'
                // });
            // } 
            // else {
            //     transform({
            //         transformer: item, doc: resp, $
            //     });
            // }
        });
    });
    return response;
};
// 
module.exports = goodReadsJSONResponse;
