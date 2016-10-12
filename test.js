var http = require('http-request');
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

fs.readFile('./feed2.xml', (err, data) => {
    parser.parseString(data, (err, result) => {
        console.log(result.rss.channel[0].item[0].link[0]);

	http.get({
	    url: result.rss.channel[0].item[0].link[0]
		}, (err, res) => {
		    fs.writeFileSync('./news1.html', res.buffer.toString());
		});
    });
});
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