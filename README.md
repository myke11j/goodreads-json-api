# goodreads-json-api
Library to get Goodreads API response in JSON format

# Project scope

The reason I build this project, was because I needed a way to get data from Goodreads API as json. And most of the API returns their data as XML. 

This packages don't call goodreads apis internally, it just takes the XML response and returns the parse JSON object.
For xml parsing, I've used [cheerio](https://www/npm.com/package/cheerio) project.

# Usage

Install the package

```
npm install --save goodreads-json-api
```

```
const goodReadsJSONResponse = require(goodreads-json-api);

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
            const resp = goodReadsJSONResponse.convertToJson(rawData);
            console.log(resp)
        } catch (e) {
            console.log(e.message);
        }
    });
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});
```

Run `npm run demo` from this project to see the [demo](https://github.com/myke11j/goodreads-json-api/blob/master/demo/demo.js) file running.

# Contribute

I would greatly appreciate if you can also contribute to this project in any way.

Currently this converts following xml nodes of Goodreads response:
- author
- books
- reviews
- similiar_books
- request

For every node, we've a transformer, which you can find [here](https://github.com/myke11j/goodreads-json-api/blob/master/transformer/mappings.js). These transformers are simple json which converts xml to json.
You can add any other node, which I've missed here and create a PR.