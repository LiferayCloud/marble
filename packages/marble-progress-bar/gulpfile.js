'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'progressBar.css',
	bundleFileName: 'progressBar.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'marble-progress-bar'
});
