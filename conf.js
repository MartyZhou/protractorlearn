exports.config = {
    allScriptsTimeout: 600000,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 600000
    },
    specs: ['todo-spec.js']
};