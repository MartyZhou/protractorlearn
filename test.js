//var http = require('http-request');
var jsdom = require("jsdom");
var serializeDocument = require("jsdom").serializeDocument;
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();


fs.readFile('./news1.html', function (err, data) {
    jsdom.env(data.toString(), function (err, window) {
        console.log(window.document.title);
        console.log(window.document.head);

        console.log(window.document.head.children.length);
        var count = window.document.head.children.length;
        for (var i = 2; i < count; i++) {
            window.document.head.children.item(2).remove();
        }

        console.log(window.document.head.children[0]);
        console.log(window.document.head.children[1]);
        console.log(window.document.head.children.length);
        console.log(window.document.title);

        var articalElement = window.document.getElementsByClassName('panel-body').item(0);
        
        var bodyChildrenCount = window.document.body.children.length;
        for (var i = 0; i < bodyChildrenCount; i++) {
            window.document.body.children.item(0).remove();
        }

        window.document.body.appendChild(articalElement);

        fs.writeFileSync('./news1less.html', serializeDocument(window.document));
    });
});

//fs.readFile('./feed2.xml', (err, data) => {
//    parser.parseString(data, (err, result) => {
//        console.log(result.rss.channel[0].item[0].link[0]);

//	http.get({
//	    url: result.rss.channel[0].item[0].link[0]
//		}, (err, res) => {
//		    fs.writeFileSync('./news1.html', res.buffer.toString());
//		});
//    });
//});


//fs.readFile('./feedbbc.xml', (err, data) => {
//    parser.parseString(data, (err, result) => {
//        console.log(result.rss.channel[0].item[0].link[0]);

//	http.get({
//	    url: result.rss.channel[0].item[0].link[0]
//		}, (err, res) => {
//		    fs.writeFileSync('./newsbbc.html', res.buffer.toString());
//		});
//    });
//});


// BBC feed
/*
http.get({
    url: 'http://feeds.bbci.co.uk/news/world/rss.xml'
}, (err, res) => {
    fs.writeFileSync('./feedbbc.xml', res.buffer.toString());
});
*/
/*
http.get({
    url: 'http://www.businessmagazin.ro/rss-feed.xml'
}, (err, res) => {
    fs.writeFileSync('./feed2.xml', res.buffer.toString());
});
*/

/*
http.get({
    url: 'http://www.businessmagazin.ro/actualitate/invatamantul-gratuit-nu-e-gratuit-cat-costa-sa-fii-elev-la-o-scoala-de-stat-din-romania-15789601'
}, (err, res) => {
    fs.writeFileSync('./test.html', res.buffer.toString());
    console.log(res.buffer.toString());
});
*/
