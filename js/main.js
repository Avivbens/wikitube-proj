'use strict';

//

function onInit() {
    initYT().then(renderVideos);
    initWiki().then(renderWiki);

    addListeners();
}

function addListeners() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('input', debounce(onSearch, 1000, searchBar));
}

function renderVideos(data) {
    const items = data.items;
    const elContainer = document.querySelector('.videos-selector-container');

    const strHTML = items
        .map((item) => {
            return `
        <div class="video-box" onclick="onLoadNewVideo('${item.id.videoId}')">
            <img src="${item.snippet.thumbnails.default.url}" alt="${item.snippet.title}">
            <p class="description">${item.snippet.title}</p>
        </div>
        `;
        })
        .join('');

    elContainer.innerHTML = strHTML;
}

function renderWiki(data) {
    const search = data.query.search;

    const strHTML = search
        .map((res) => {
            return `
                <div class="description">
                <h3 onclick="onGotoWiki('${res.title}')">${res.title}</h3>
                ${res.snippet}...
                </div>
                `;
        })
        .join('');

    const elContainer = document.querySelector('.main-description');
    elContainer.innerHTML = strHTML;
}

function onLoadNewVideo(id) {
    const videoFrame = document.querySelector('.iframe-box');

    videoFrame.src = generateNewVideo(id);
}

function onSearch(el) {
    var value = el.value;

    if (!value) value = 'The Beatles';

    initYT(value).then(renderVideos);
    initWiki(value).then(renderWiki);
}

function onGotoWiki(title) {
    const url = generateWikiLink(title);

    window.open(url, '_blank');
}
