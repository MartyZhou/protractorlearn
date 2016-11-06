var jsdom = require("jsdom");
var serializeDocument = require("jsdom").serializeDocument;
var imgClass = 'js-delayed-image-load';
var articalClassName = 'story-body__inner';
var basePath = './bbc/';

exports.execute = (html) => {
    return new Promise((resolve, reject) => {
        jsdom.env(html, (err, window) => {
            var document = window.document;
            var title = document.title;
            var articalElement = document.getElementsByClassName(articalClassName).item(0);

            clearChildNodes(document.head);
            clearChildNodes(document.body);

            appendTitle(document, title);
            document.body.appendChild(createBodyTitle(document, title));
            document.body.appendChild(articalElement);
            var imagesToBeDownloaded = changeImageSrc(document, title);

            result = serializeDocument(document);
            resolve({ path: basePath + title + '.html', html: result, title: title, images: imagesToBeDownloaded });
        });
    });
}

function clearChildNodes(node) {
    var count = node.childNodes.length;
    for (var i = 0; i < count; i++) {
        node.childNodes.item(0).remove();
    }
}

function appendTitle(document, title) {
    var titleElement = document.createElement('title');
    titleElement.innerHTML = title;
    document.head.appendChild(titleElement);
}

function createBodyTitle(document, title) {
    var titleElement = document.createElement('h1');
    titleElement.innerHTML = title;
    return titleElement;
}

function changeImageSrc(document, title) {
    var imagesToBeDownloaded = [];
    var rawImgElements = document.getElementsByClassName(imgClass);
    var imgElements = document.getElementsByTagName('img');

    var count = rawImgElements.length;
    var imgCount = imgElements.length;

    for (var i = 0; i < count; i++) {
        var divElement = rawImgElements.item(0); // div is replaced by img below, the next div will become the first one.

        var imgElement = convertDiv2Img(document, title, divElement, i);
        divElement.parentNode.replaceChild(imgElement, divElement);
        imagesToBeDownloaded.push({ src: divElement.attributes['data-src'].value, path: basePath + imgElement.src });
    }

    for (var j = 0; j < imgCount; j++) {
        var imgElement = imgElements.item(j);

        var src = imgElement.src;
        var path = title + '_img_' + j + getSuffix(src);
        imagesToBeDownloaded.push({ src: src, path: basePath + path });
        imgElement.src = path;
    }

    return imagesToBeDownloaded;
}

function convertDiv2Img(document, title, div, imgIndex) {
    var src = div.attributes['data-src'].value;
    var imgAlt = div.attributes['data-alt'].value;
    var imgWidth = div.attributes['data-width'].value;
    var imgHeight = div.attributes['data-height'].value;

    var imgElement = document.createElement('img');
    imgElement.src = title + '_div_' + imgIndex + getSuffix(src);
    imgElement.alt = imgAlt;
    imgElement.width = imgWidth;
    imgElement.height = imgHeight;

    return imgElement;
}

function getSuffix(url) {
    var trueUrl = url.split('?')[0];
    var urlSections = trueUrl.split('.');

    return '.' + urlSections[urlSections.length - 1];
}