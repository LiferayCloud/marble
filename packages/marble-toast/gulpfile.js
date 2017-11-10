'use strict';

var gulp = require('gulp');
var metal = require('gulp-metal');
var runSequence = require('run-sequence');

metal.registerTasks({
	bundleFileName: 'toast.js',
	moduleName: 'marble-toast'
});

gulp.task('soy:copy', function() {
	return gulp.src('src/**/*.soy')
		.pipe(gulp.dest('build/soy'));
});

gulp.task('default', function(done) {
	runSequence(
		'clean',
		['css', 'build:globals', 'build:amd', 'build:amd:jquery', 'soy:copy'],
		'uglify',
		done
	);
});
