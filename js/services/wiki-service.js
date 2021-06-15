'use strict';

function initWiki(search = 'The Beatles') {
    return getWiki(search);
}

function getWiki(str) {
    const url = `https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${str}&format=json`;

    const prm = ask(url);

    return prm;
}

function generateWikiLink(str) {
    const arr = str.split(' ');

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(' ');

    const urlPart = str2.replace(' ', '_');

    return `https://en.wikipedia.org/wiki/${urlPart}`;
}
