module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: ['test/**/*.js'],
    preprocessors: {
      'test/**/*.js': ['webpack'],
    },
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: true
  })
}
