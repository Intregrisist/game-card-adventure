/**
 * Karma Configuration
 **/
module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../..',

        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files : [
            // JS Dependencies (Angular)
            'dist/js/angular.js',

            // JS Files
            'src/app/**/*.js',
            'src/common/**/*.js',

            // Test Files
            'test/unit/**/*.spec.js',

            // Template Files
            'dist/templates/**/*.js'
        ],

        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots' || 'progress'
        reporters : 'progress',

        // web server port
        port : 8089,

        // cli runner port
        runnerPort: 9109,

        urlRoot : '/__test/',

        // enable / disable colors in the output (reporters and logs)
        colors : true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel : config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch : false,

        // polling interval in ms (ignored on OS that support inotify)
        autoWatchInterval : 0,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari
        // - PhantomJS
        browsers : ['Chrome'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun : true
    });
};