describe('testAsync', function () {

    beforeEach(function () {
        console.log('beforeEach - step 1 ');

        // `get` implicitly registers a promise with the control flow
        browser.get("https://angularjs.org/");

        console.log('beforeEach - step 2 '); // runs "before" get above returns!

        testFunc().then(function () {
            // use a then to explicitly chain a dependency off a promise
            console.log('beforeEach - after testFunc - step 3');
        })

        protractor.promise.controlFlow().execute(function () {
            console.log('beforeEach - after testFunc, via controlFlow - step 4');
        });

        console.log('beforeEach - end of beforeEach - everything registered, nothing done');
    });

    var testFunc = function () {

        console.log("testFunc - step 1")

        // return browser wait promise to caller
        // `wait` also implicitly registers with the control flow
        return browser.wait(function () {
            return element(by.id('twitter-widget-1')).isPresent()
              .then(function (isPresent) {
                  console.log("testFunc - step 2")
                  return true; // tell wait its done by resolving then promise->element promise->wait
              });
        });
    }

    it('test after BeforeEach', function () {
        console.log("Last trace")
    });

});