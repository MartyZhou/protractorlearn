//var http = require('http-request');
var jsdom = require("jsdom");
var serializeDocument = require("jsdom").serializeDocument;
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();


fs.readFile('./news1.html', function (err, data) {
    jsdom.env(data.toString(), function (err, window) {
        console.log(window.document.title);
        //console.log(window.document.head);

        //console.log(window.document.head.childNodes);
        var count = window.document.head.childNodes.length;
        for (var i = 4; i < count; i++) {
            window.document.head.childNodes.item(4).remove();
        }

        //console.log(window.document.head.children[0]);
        //console.log(window.document.head.children[1]);
        //console.log(window.document.head.children.length);
        //console.log(window.document.title);

        var articalElement = window.document.getElementsByClassName('panel-body').item(0);
        
        //var bodyChildrenCount = window.document.body.children.length;
        //for (var i = 0; i < bodyChildrenCount; i++) {
        //    window.document.body.children.item(0).remove();
        //}

        var bodyChildrenCount = window.document.body.childNodes.length;
        for (var i = 0; i < bodyChildrenCount; i++) {
            window.document.body.childNodes.item(0).remove();
        }

        window.document.body.appendChild(articalElement);

        var imgs = window.document.getElementsByTagName('img');
        //http.get({
        //    url: imgs.item(0).src
        //}, function (err, res) {
        //    fs.writeFileSync('./news1img.jpg', res.buffer);
        //});

        console.log(imgs.item(0).src);
        imgs.item(0).src = './news1img.jpg';

        var scripts = window.document.getElementsByTagName('script');
        var scriptLength = scripts.length;
        for (var i = 0; i < scriptLength; i++) {
            scripts.item(0).remove();
        }

        console.log(window.document.body.childNodes);
        //console.log(window.document.body.children.item(0).childNodes[1]);
        //console.log(window.document.body.children.item(0).childNodes[2]);
        //console.log(window.document.body.children.item(0).childNodes[3]);
        //console.log(window.document.body.children.item(0).childNodes[4]);
        //console.log(window.document.body.children.item(0).childNodes[5]);
        //console.log(window.document.body.children.item(0).childNodes[6]);
        //console.log(window.document.body.children.item(0).childNodes[7]);
        //console.log(window.document.body.children.item(0).childNodes[8]);

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
