var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('build', function() {
	return gulp.src('src/*.scss')
		.pipe(compass({
			css: 'dist',
			sass: 'src'
		}))
		.pipe(gulp.dest('dist'));
});
