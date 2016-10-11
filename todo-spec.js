describe('translate', function () {
    it('translate', function () {
        var fs = require('fs');
        var xml2js = require('xml2js');
        var parser = new xml2js.Parser();
        var articals = [];
        var content = '<html><head><meta content="text/html; charset=utf-8" http-equiv="Content-Type"/><title>articles</title></head><body><h1>articles</h1><h4 height="1em">businessmagazin</h4><ul>';
        var ncx = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE ncx PUBLIC "-//NISO//DTD ncx 2005-1//EN" "http://www.daisy.org/z3986/2005/ncx-2005-1.dtd"><ncx xmlns:mbp="http://mobipocket.com/ns/mbp" xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1" xml:lang="en-US"><head><meta content="martyzhou" name="dtb:uid" /><meta content="2" name="dtb:depth" /><meta content="0" name="dtb:totalPageCount" /><meta content="0" name="dtb:maxPageNumber" /></head><docTitle><text>Business Magazin</text></docTitle><docAuthor><text>Marty</text></docAuthor><navMap>	<navPoint playOrder="0" class="periodical" id="periodical"><navLabel><text>articles</text></navLabel><content src="../html/contents.html" /><navPoint playOrder="1" class="section" id="translate"><navLabel><text>articles</text></navLabel><content src="../html/0.html" />';
        var opf = '<?xml version="1.0" encoding="utf-8"?><package xmlns="http://www.idpf.org/2007/opf" version="2.0" unique-identifier="martyzhou"><metadata>	<dc-metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>Business Magazin</dc:title><dc:language>en-US</dc:language><dc:Identifier id="uid">02FFA518EB</dc:Identifier><dc:creator>Marty</dc:creator><dc:publisher>Marty</dc:publisher><dc:subject>magazine</dc:subject><dc:date>2015-10-22</dc:date><dc:description>Business Magazin</dc:description></dc-metadata><x-metadata><output content-type="application/x-mobipocket-subscription-magazine" encoding="utf-8"/></x-metadata></metadata><manifest>';

        browser.ignoreSynchronization = true;

        browser.get('http://www.businessmagazin.ro/rss-feed.xml');

        var feedContent = browser.element(by.tagName('pre'));
        var feedString;
        var feed;

        feedContent.getText().then(function (data) {
            feedString = data;
            parser.parseString(feedString, function (err, data) { feed = data; });

            feed.rss.channel[0].item.forEach(function (item, index) {
                if (index < 10) {
                    var artical = { link: item.link[0] };
                    artical.params = [];
                    artical.html = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';

                    browser.get(artical.link);
                    var page = browser.element(by.className('a-entry'));
                    var title = page.all(by.tagName('h1')).first();
                    var ps = page.all(by.tagName('p'));


                    title.getText().then(function (data) {
                        artical.title = data.replace(/"/g, '');
                        artical.html = artical.html + '<title>' + artical.title + '</title></head><body><h1>' + artical.title + '</h1><article>';
                    });

                    var count;
                    ps.count().then(function (data) {
                        count = data - 2;
                    });

                    protractor.promise.controlFlow().execute(function () {
                        for (var i = 0; i < count; i++) {
                            var p = ps.get(i);
                            p.getText().then(function (data) {
                                artical.html = artical.html + '<p>' + data + '</p>';
                                artical.params.push(data);
                            });
                        }
                    });

                    protractor.promise.controlFlow().execute(function () {
                        artical.html = artical.html + '</article>';
                    });

                    protractor.promise.controlFlow().execute(function () {
                        articals.push(artical);
                    });
                }
            });
        });

        protractor.promise.controlFlow().execute(function () {
            browser.get('https://translate.google.com/');
            var src = browser.element(by.id('source'));
            var translate = browser.element(by.id('gt-submit'));

            articals.forEach(function (item, index) {
                item.html = item.html + '<h2>English</h2><article>';
                item.params.forEach(function (p) {
                    src.clear();
                    src.sendKeys(p);
                    translate.click();
                    browser.sleep(2000);

                    var result = browser.element(by.id('result_box'));

                    result.getText().then(function (data) {
                        item.html = item.html + '<p>' + data + '</p>';
                    });
                });

                protractor.promise.controlFlow().execute(function () {
                    item.html = item.html + '</article></body></html>';
                });
            });
        });

        protractor.promise.controlFlow().execute(function () {
            articals.forEach(function (item, index) {
                console.log(item.html);
                content = content + '<li><a href="' + index + '.html">' + item.title + '</a></li>';
                ncx = ncx + '<navPoint playOrder="' + index + 2 + '" class="article" id="item-' + index + '"><navLabel><text>' + item.title + '</text></navLabel><content src="../html/' + index + '.html" /><mbp:meta name="author">google</mbp:meta></navPoint>';
                opf = opf + '<item href="html/' + index + '.html" media-type="application/xhtml+xml" id="' + index + '"/>';

                fs.writeFileSync('./result/html/' + index + '.html', item.html);
            });
        });

        protractor.promise.controlFlow().execute(function () {
            content = content + '</ul></body></html>';
            ncx = ncx + '</navPoint></navPoint></navMap></ncx>';
            opf = opf + '<item href="html/contents.html" media-type="application/xhtml+xml" id="contents"/>';
            opf = opf + '<item href="misc/nav-contents.ncx" media-type="application/x-dtbncx+xml" id="nav-contents"/>';
            opf = opf + '</manifest><spine toc="nav-contents"><itemref idref="contents"/>';
            articals.forEach(function (item, index) {
                opf = opf + '<itemref idref="' + index + '"/>';
            });

            opf = opf + '</spine><guide><reference href="html/contents.html" type="toc" title="Table of Contents" /><reference href="html/0.html" type="text" title="' + articals[0].title + '"/></guide></package>';

            fs.writeFileSync('./result/html/contents.html', content);
            fs.writeFileSync('./result/misc/nav-contents.ncx', ncx);
            fs.writeFileSync('./result/businessmagazin.opf', opf);
        });

        /*
        browser.get('http://www.businessmagazin.ro/actualitate/invatamantul-gratuit-nu-e-gratuit-cat-costa-sa-fii-elev-la-o-scoala-de-stat-din-romania-15789601');

        var page = browser.element(by.className('a-entry'));
        var artical = {};
        var title = page.all(by.tagName('h1')).first();


        title.getText().then(function (data) {
            artical.title = data;
        });

        page.getText().then(function (data) {
            artical.src = data;
        });

        protractor.promise.controlFlow().execute(function () {
            console.log(artical.src);
            browser.get('https://translate.google.com/');

            var src = browser.element(by.id('source'));
            src.sendKeys(artical.src);

            var translate = browser.element(by.id('gt-submit'));
            translate.click();
            browser.sleep(3000);
            var result = browser.element(by.id('result_box'));

            result.getText().then(function (data) {
                artical.dest = data;
                fs.writeFileSync('./articals/' + artical.title + '.txt', artical.src + '\r\n\r\n\r\n' + artical.dest);
            });
        });
        */

        //browser.pause();
        /*var t;
        browser.get('https://www.google.com/');
        browser.getTitle().then(function(title) {
            assert.equal(title, "Google");
            console.log(title);
            t = title;
            console.log('inside ' + t);
            assert.equal(t, "Google");
            
            browser.get('http://www.businessmagazin.ro/rss-feed.xml');
        });
        
        console.log('outside ' + t);
        
        browser.pause();*/
        //var fs = require('fs');
        /* var xml2js = require('xml2js');
        var parser = new xml2js.Parser();
        
        browser.get('http://www.businessmagazin.ro/rss-feed.xml');
        
        var feedContent = browser.element(by.tagName('pre'));
        var feedString;
        var feed;
        
        var feedContentPromise = feedContent.getText();
        feedContentPromise.then((data) => { 
            feedString = data;
            parser.parseString(feedString, (err, data) => { feed = data; });
            
            var a1 = feed.rss.channel[0].item[0].link[0];
            console.log(a1);
            browser.get(a1);
        });
        */

        //parser.parseString(feedString, (err, data) => { feed = data; });

        //browser.pause();
        //feedContent.getText().then(function(data){ feedString = data; });


        //parser.parseString(feedString, function (err, result) { feed = result });

        //var a1 = feed.rss.channel[0].item[0].link;
        //var feedContent = ""+ browser.element(by.tagName('pre')).getText() + "";

        /* var wideElement = element(by.js(function () {
            var container = document.getElementsByTagName("body")[0];
            var div = document.createElement("div");
            div.appendChild(document.createTextNode('Hello RSS'));
    
            container.appendChild(div);
            
            return div;
        }));
    
        wideElement.getText();
    
    
        fs.readFile('./feed.xml', function (err, data) {
            
        });*/
        //        parser.parseString(s3, function (err, result) { console.log(result) };

        //fs.readFile('./feed.xml', function (err, data) {
        //    parser.parseString(data, function (err, result) {
        //        div.appendChild(document.createTextNode(result));
        //        div.appendChild(document.createTextNode('Done'));
        //    });
        //});

        //browser.get('https://translate.google.com/');

        //var src = browser.element(by.id('source'));

        //src.sendKeys('Noua unitate este rezultatul unei investiţii de peste 700.000 de euro şi oferă pacienţilor investigaţii şi tratamente pentru 22 de specialităţi medicale, printre care pediatrie, ORL, gastrointerologie, ortopedie, dermatologie, chirurgie generală sau neurochirurgie. Noul spaţiu se întinde pe o suprafaţă de 700 de metri pătraţi, este dispus pe două nivele şi cuprinde 14 de cabinete medicale destinate consultaţiilor şi investigaţiilor clinice şi paraclinice. Echipa medicală este formată din peste 50 de medici şi personal de suport.');

        //src.sendKeys(a1);
        //var result = browser.element(by.id('result_box')).getText();

        /*
        browser.get('https://angularjs.org');
    
     
     
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();
    
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');
    
        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
        */

        //browser.get('http://localhost:8001/ims');

        //element(by.model('vm.userName')).sendKeys('marty');
        //element(by.model('vm.password')).sendKeys('marty');
        //element(by.model('vm.firmId')).sendKeys('TBZQK');

        //browser.sleep(2000);
        ////browser.waitForAngular();
        //element(by.buttonText('Login')).click();

        ////expect(browser.getCurrentUrl()).toBe('http://localhost:8001/ims/#/app');

        //browser.sleep(10000);
        ////browser.waitForAngular();   
        //browser.setLocation('app/trading/blotter');


        ////element.all(by.css('ctr-meta-Security')).first().click();
        ////element(by.model('ctrlInstance.destinations')).sendKeys('CITI');

        ////element.all(by.binding('ctrlOrder.getOrderVisibleCount()')).count()

        //browser.sleep(20000);
        //var grid = element(by.id('ctr-order-blotter-grid'));
        //var tbody = grid.element(by.tagName('tbody'));
        //tbody.all(by.tagName('tr')).first().click();


        //browser.sleep(2000);
        ////browser.waitForAngular();
        //element(by.repeater('blade in bladeList').row(0)).click();

        //browser.sleep(10000);
        //// element(by.repeater('route in ctrlRoute.routesObservable track by route.RouteId').row(0))
        //var route = element(by.repeater('route in ctrlRoute.routesObservable').row(0));
        //var addRoute = route.all(by.tagName('span')).last();
        //addRoute.click();
        //browser.sleep(2000);

        //var addRouteBlade = element.all(by.repeater('blade in bladeInstances')).last();
        ////element(by.model('ctrlInstance.route.DestinationId')).sendKeys('CITI');
        //var inputs = addRouteBlade.all(by.tagName('input'));
        //inputs.get(0).sendKeys('CITI');
        //inputs.get(2).sendKeys('CITI-CASH');
        //inputs.get(4).click();
        ////inputs.get(4).clear();
        ////inputs.get(4).sendKeys('10');
        ////inputs.get(7).sendKeys('$1E');

        //var send = addRouteBlade.element(by.buttonText('Send'));
        //send.click();
        //browser.sleep(10000);

        //browser.pause();
    });
});