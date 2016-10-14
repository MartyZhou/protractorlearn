var jsdom = require("jsdom");
var serializeDocument = require("jsdom").serializeDocument;

var imgClass = 'js-delayed-image-load';
var articalClassName = 'story-body__inner';

exports.execute = function(html, cb){
    console.log('the artical body is ' + articalClassName);
    jsdom.env(html, (err, window) => {
       var document = window.document;
       var title = document.title;
       var articalElement = document.getElementsByClassName(articalClassName).item(0);
       
       clearChildNodes(document.head);
       clearChildNodes(document.body);
       
       appendTitle(document, title);
       document.body.appendChild(createBodyTitle(document, title));
       document.body.appendChild(articalElement);
       changeImageSrc(document);
       
       result = serializeDocument(document);
       cb(result);
    });
}

function clearChildNodes(node){
    var count = node.childNodes.length;
    for(var i = 0; i < count; i ++){
        node.childNodes.item(0).remove();
    }
}

function appendTitle(document, title){
    var titleElement = document.createElement('title');
    titleElement.innerHTML = title;
    document.head.appendChild(titleElement);
}

function createBodyTitle(document, title){
    var titleElement = document.createElement('h1');
    titleElement.innerHTML = title;
    return titleElement;
}

function changeImageSrc(document){
    var rawImgElements = document.getElementsByClassName(imgClass);
    var count = rawImgElements.length;
    console.log('changeImageSrc '+ count);
    for(var i = 0; i < count; i ++){
        var imgSrc = rawImgElements.item(i).attributes['data-src'].value;
         
        console.log(rawImgElements.item(i).attributes['data-src'].value);
    }
}

function convertDiv2Img(document, div){
    var imgSrc = div.attributes['data-src'].value;
    var imgAlt = div.attributes['data-alt'].value;
    var imgWidth = div.attributes['data-width'].value;
    var imgHeight = div.attributes['data-height'].value;
    
    var imgElement = document.create('img');
    imgElement.alt = imgAlt;
    imgElement.width = imgWidth;
    imgElement.height = imgHeight;
    
}