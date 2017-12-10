'use strict'

const https = require('https');
const cheerio = require('cheerio');

const transformer = require('./transformer');
const helpers = require('./helpers');
const goodReadsJSONResponse = {};

const resp = {};

https.get('https://www.goodreads.com/book/isbn/0441172717?key=Uxb0zPb86N4STVy2ECWYA', (res) => {
    const options = {
        xml: {
            normalizeWhitespace: true
        }
    }
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];
    let error;
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    }
    if (error) {
        console.log(error.message);
        // consume response data to free up memory
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
        try {
            const $ = cheerio.load(rawData, options);
            transformer.mappings.forEach((item, index) => {
                const node = item.transformer_type;
                let parser = node;
                const mapping = item.mapping;
                mapping.forEach((mapItem, index2) => {
                    parser = ' ' + mapItem.key;
                    resp[mapItem.jsonKey] = $(parser).html();
                    if (mapItem.helper && helpers[mapItem.helper]) {
                        resp[mapItem.jsonKey] = helpers[mapItem.helper](resp[mapItem.jsonKey]);
                    }
                });
            });
            console.log(resp);
        } catch (e) {
            console.log(e.message);
        }
    });
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});

module.exports = goodReadsJSONResponse;