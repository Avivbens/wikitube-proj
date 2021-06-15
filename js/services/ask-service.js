'use strict';

function ask(url) {
    return fetch(url).then((res) => res.json());
}
