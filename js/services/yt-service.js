'use strict';

const YT_KEY = `AIzaSyA8sxS8Y4p-9Ur0cJQCFKBo0zc2SeO6VIg`;

function initYT(search = 'Beatles') {
    return getTopYT(search);
}

function getTopYT(value, maxRes = 10) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${value}&maxResults=${maxRes}`;

    var currentLocally = loadFromStorage(`yt-search-${value}`);
    if (currentLocally) {
        console.log('from catch');
        return Promise.resolve(currentLocally);
    }
    const prm = ask(url);

    prm.then((res) => {
        saveToLocal(res, `yt-search-${value}`);
    });

    return prm;
}

function generateNewVideo(id) {
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=0`;
}
