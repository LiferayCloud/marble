var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build', function() {
	return gulp.src('src/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('build'));
});
