exports.config = {
    allScriptsTimeout: 600000,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 600000
    },
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true'],
            'prefs': { 'profile.content_settings.exceptions.images': { "http://www.businessmagazin.ro,*": { "setting": 2 } }, 'profile.content_settings.exceptions.javascript': { "http://www.businessmagazin.ro,*": { "setting": 2 } } }
        }
    },
    specs: ['todo-spec.js']
};