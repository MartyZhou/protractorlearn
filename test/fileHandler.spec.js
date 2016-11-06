var fileHandler = require('../src/fileHandler');

describe('test fileHandler', () => {
    it('load the image one by one', () => {
        let mockdata = {
            path: './test/mock.html',
            html: '<html></html>',
            images: [
                {src: 'http://localhost/mock1.jpg'},
                {src: 'http://localhost/mock2.jpg'},
                {src: 'http://localhost/mock3.jpg'},
                {src: 'http://localhost/mock4.jpg'}
            ]
        };

        fileHandler.save(mockdata).then((data) => {
            console.log('images loaded');
            expect(data).toBe(true);
        }, (err) => {
            console.error('error happend');
        });
    });
});