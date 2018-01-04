'use strict'

const helpers = {};


helpers.stripCDATA = (cDataISBN) => {
    const regex = /<!\[CDATA\[(.*)]]>/g;
    let m;
    let matched;
    while ((m = regex.exec(cDataISBN)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            matched = match;
        });
    }
    return matched;
}

helpers.newStripCDATA = (text) => {
    if (text.indexOf('<!\[CDATA\[') === 0) {
        text = text.substring('<!\[CDATA\['.length, text.length)
    }
    const matches = text.match(/(.*)(?=]]>)/g);
    return (matches) ? matches[0] : text;
}

helpers.getPopularCategories = (popularShelves) => {
    if (popularShelves.length > 20) {
        popularShelves = popularShelves.slice(0, 20);
    }
    const shelves = [];
    popularShelves.map((shelve) => {
        shelves.push({
            count: popularShelves[shelve].attribs.count,
            name: popularShelves[shelve].attribs.name
        });
    });
    return shelves;
}

helpers.stripHTML = (text) => {
    if (text.indexOf('<!\[CDATA\[') === 0) {
        text = text.substring('<!\[CDATA\['.length, text.length)
    }
    const matches = text.match(/(.*)(?=]]>)/g);
    text = (matches) ? matches[0] : text;
    return text.replace(/<\/?[^>]+(>|$)/g, "");
}

module.exports = helpers;