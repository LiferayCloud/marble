'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
  bundleCssFileName: 'select.css',
  bundleFileName: 'select.js',
  mainBuildJsTasks: ['build:globals'],
  moduleName: 'marble-select'
});
