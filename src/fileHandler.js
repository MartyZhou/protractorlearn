var http = require('http-request');
var fs = require('fs');

exports.save = function (article) {
    fs.writeFileSync(article.path, article.html);
    return saveImages(article.images);

    /*return new Promise((resolve, reject) => {
        console.log('getting image from ' + article.images[0].src);
        http.get({ url: article.images[0].src }, (err, res) => {
            if (res) {
                fs.writeFileSync(img.path, res.buffer);
                resolve(true);
            } else {
                console.error('failed to get image from ' + article.images[0].src + '. The error is ' + err);
                resolve(true);
            }
        });
    });*/
}

function saveImages(imgs) {
    return new Promise((resolve, reject) => {
        loadImage(imgs[0]).then(() => {
            loadImage(imgs[1]).then(() => {
                loadImage(imgs[2]).then(() => {
                    loadImage(imgs[3]).then(() => {
                        resolve();
                    });
                });
            });
        });
    });
    //let startPromise = loadImage(imgs[0]);

    //return startPromise;
    /*imgs.forEach((img, index) => {
        console.log('getting image from ' + img.src);

        loadImage(img.src);

        http.get({ url: img.src }, (err, res) => {
            if (res) {
                fs.writeFileSync(img.path, res.buffer);
            } else {
                console.error('failed to get image from ' + img.src + '. The error is ' + err);
            }
        });
    });*/
}

function loadImage(img) {
    return new Promise((resolve, reject) => {
        console.log('getting image from ' + img.src);
        http.get({ url: img.src }, (err, res) => {
            if (res) {
                fs.writeFileSync(img.path, res.buffer);
                resolve(true);
            } else {
                console.error('failed to get image from ' + img.src + '. The error is ' + err);
                resolve(true);
            }
        });
    });
}