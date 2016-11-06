var fs = require('fs');
var builder = require('xmlbuilder');

var title = 'My Daily';
var creator = 'Marty Zhou';
var publisher = 'martyzhou.com';
var date = (new Date()).toDateString();

var root = builder.create('package', { 'xmlns': 'http://www.idpf.org/2007/opf' });
var metadata = root.ele('metadata');
var dcmetadata = metadata.ele('dc-metadata', { 'xmlns:dc': 'http://purl.org/dc/elements/1.1/' });
dcmetadata.ele('dc:title', title);
dcmetadata.ele('dc:language', 'en-GB');
dcmetadata.ele('dc:creator', creator);
dcmetadata.ele('dc:publisher', publisher);
dcmetadata.ele('dc:date', date);

var xmetadata = metadata.ele('x-metadata');
xmetadata.ele('output', { 'content-type': 'application/x-mobipocket-subscription-magazine', 'encoding': 'utf-8' });

var manifest = root.ele('manifest');
manifest.ele('item', { 'href': 'contents.html', 'media-type': 'application/xhtml+xml', 'id': 'contents' });
manifest.ele('item', { 'href': 'nav-contents.ncx', 'media-type': 'application/x-dtbncx+xml', 'id': 'nav-contents' });

var spine = root.ele('spine', { 'toc': 'nav-contents' });
spine.ele('itemref', { 'idref': 'contents' });

var ncx = builder.create('ncx');
ncx.ele('docTitle').ele('text', title + ' ' + date);
ncx.ele('docAuthor').ele('text', creator);
var navPoint = ncx.ele('navMap').ele('navPoint', { playOrder: '0', class: 'periodical', id: 'periodical' });
navPoint.ele('navLabel').ele('text', 'Contents');
navPoint.ele('content', { 'src': './contents.html' });

var bbcNav = navPoint.ele('navPoint');
bbcNav.ele('navLabel').ele('text', 'BBC News');
bbcNav.ele('content', { 'src': './contents.html' });

var content = builder.create('html');
var head = content.ele('head');
head.ele('meta', { 'content': 'text/html; charset=utf-8', 'http-equiv': 'Content-Type' });
head.ele('title', 'Contents');
var body = content.ele('body');
body.ele('h1', 'Contents');
var items = body.ele('ul');

exports.add = function (article) {
    manifest.ele('item', { 'href': article.path, 'media-type': 'application/xhtml+xml', 'id': article.path });
    spine.ele('itemref', { 'idref': article.path });

    var nav = bbcNav.ele('navPoint');
    nav.ele('navLabel').ele('text', article.title);
    nav.ele('content', { 'src': article.path });

    items.ele('li').ele('a', { 'href': article.path }, article.title);

    console.log('Add article to metadata: ' + article.path);
}

exports.save = function () {
    fs.writeFileSync('./contents.html', content.end({ pretty: true }));
    fs.writeFileSync('./nav-contents.ncx', ncx.end({ pretty: true }));
    fs.writeFileSync('./' + title + '_' + date + '.opf', root.end({ pretty: true }));

    console.log('Save metadata files');
}