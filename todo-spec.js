
describe('translate', function () {
    it('translate', function () {
        browser.ignoreSynchronization = true;
        //var fs = require('fs');
        var xml2js = require('xml2js');
        var parser = new xml2js.Parser();
        
        browser.get('http://www.businessmagazin.ro/rss-feed.xml');
        
        var feedContent = browser.element(by.tagName('pre'));
        var feedString;
        var feed;
        
        feedContent.getText().then((data) => { feedString = data; });
        
        parser.parseString(feedString, (err, data) => { feed = data; });
        
        browser.pause();
        //feedContent.getText().then(function(data){ feedString = data; });
        
        
        //parser.parseString(feedString, function (err, result) { feed = result });
        
        var a1 = feed.rss.channel[0].item[0].link;
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
        browser.pause();

        browser.get('https://translate.google.com/');

        var src = browser.element(by.id('source'));
        
        //src.sendKeys('Noua unitate este rezultatul unei investiţii de peste 700.000 de euro şi oferă pacienţilor investigaţii şi tratamente pentru 22 de specialităţi medicale, printre care pediatrie, ORL, gastrointerologie, ortopedie, dermatologie, chirurgie generală sau neurochirurgie. Noul spaţiu se întinde pe o suprafaţă de 700 de metri pătraţi, este dispus pe două nivele şi cuprinde 14 de cabinete medicale destinate consultaţiilor şi investigaţiilor clinice şi paraclinice. Echipa medicală este formată din peste 50 de medici şi personal de suport.');

        src.sendKeys(a1);
        var result = browser.element(by.id('result_box')).getText();

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

        browser.pause();
    });
});