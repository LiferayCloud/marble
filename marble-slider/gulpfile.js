'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'slider.css',
	bundleFileName: 'slider.js',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-slider'
});
