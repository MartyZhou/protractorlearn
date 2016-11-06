var http = require('http-request');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

var fileHandler = require('./fileHandler');
var metaBuilder = require('./metaBuilder');
var bbcProcessor = require('./processors/bbcProcessor');

var bbcmax = 10;
var bbcseed = 'http://feeds.bbci.co.uk/news/world/rss.xml';

http.get({ url: bbcseed }, (err, res) => {

    if (res) {
        parser.parseString(res.buffer.toString(), (err, result) => {

            var loadedCount = 0;
            result.rss.channel[0].item.forEach((item, index) => {
                if (index < bbcmax) {
                    setTimeout(() => {
                        console.log('Getting page from ' + item.link[0]);

                        http.get({ url: item.link[0] }, (err, res) => {

                            loadedCount++;
                            if (res) {
                                bbcProcessor.execute(res.buffer.toString(), (data) => {
                                    fileHandler.save(data);
                                    metaBuilder.add(data);

                                    console.log('ladedCount is ' + loadedCount);
                                    if (loadedCount === bbcmax) {
                                        metaBuilder.save();
                                    }
                                });
                            } else {
                                console.error('Failed to load page ' + item.link[0] + '. The error is ' + err);
                                console.log('ladedCount is ' + loadedCount);
                                if (loadedCount === bbcmax) {
                                    metaBuilder.save();
                                }
                            }
                        });
                    },
                        index * 10000);
                }
            });
        });
    } else {
        console.error('Failed to load seed ' + bbcseed + '. The error is ' + err);
    }
});