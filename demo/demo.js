/**
 * @desc Demo file showing working of this package. Run node demo.js from demo directory to see json response of API
 * @author Mukul <@mukul1904>
 */

'use strict'

const https = require('https');
const goodReadsJSONResponse = require('../index');

const author = 'Neil Gaiman';
const book = 'Neverwhere';

const API = `https://www.goodreads.com/book/title.xml?author=${author}&key=Uxb0zPb86N4STVy2ECWYA&title=${book}`;

https.get(API, (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
        const response = goodReadsJSONResponse.convertToJson(rawData);
        console.log(response);
    });
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});