'use strict';

var metalKarmaConfig = require('metal-karma-config/coverage');

module.exports = function (config) {
	metalKarmaConfig(config);

	config.plugins.push('karma-scss-preprocessor');
	config.files.push(
		'node_modules/metal-drag-drop/test/fixtures/DragTestHelper.js',
		'src/**/*.scss'
	);
	config.preprocessors['src/**/*.scss'] = ['scss'];
	config.preprocessors['node_modules/metal-drag-drop/test/**/*.js'] = ['babel', 'commonjs'];
	config.scssPreprocessor = {
		options: {
			sourceMap: true
		}
	};
};
