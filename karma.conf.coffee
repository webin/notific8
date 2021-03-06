# Karma configuration
# Generated on Wed May 25 2016 20:51:48 GMT-0400 (EDT)

module.exports = (config) ->
  config.set

    captureConsole: true

    # base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: ''


    # frameworks to use
    # available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine']


    # list of files / patterns to load in the browser
    files: [
      'dist/notific8.js'
      'dist/modules/image/notific8-image.js'
      'dist/modules/icon/notific8-icon.js'
      'spec/*Spec.js'
      'modules/**/spec/*Spec.js'
    ]


    # list of files to exclude
    exclude: [
    ]


    # preprocess matching files before serving them to the browser
    # available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'dist/notific8.js': ['coverage']
    }


    # test results reporter to use
    # possible values: 'dots', 'progress'
    # available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      'progress'
      # 'html'
      'coverage'
    ]

    # htmlReporter:
    #   outputFile: 'karma_tests/units.html'

    coverageReporter:
      type : 'html'
      dir : 'karma_tests/coverage/'

    # web server port
    port: 9876


    # enable / disable colors in the output (reporters and logs)
    colors: true


    # level of logging
    # possible values:
    # - config.LOG_DISABLE
    # - config.LOG_ERROR
    # - config.LOG_WARN
    # - config.LOG_INFO
    # - config.LOG_DEBUG
    logLevel: config.LOG_INFO


    # enable / disable watching file and executing tests whenever any file changes
    autoWatch: false


    # start these browsers
    # available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS']


    # Continuous Integration mode
    # if true, Karma captures browsers, runs the tests and exits
    singleRun: false

    # Concurrency level
    # how many browser should be started simultaneous
    concurrency: Infinity
