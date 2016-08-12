var gulp = require('gulp');
var sass = require('gulp-sass');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

gulp.task('build', function() {
	return gulp.src('src/*.scss')
		.pipe(sass({includePaths: ['node_modules']}))
		.pipe(gulp.dest('build'));
});

gulp.task('fonts', ['fonts12', 'fonts16']);

gulp.task('fonts12', function() {
	return gulp.src('src/fonts/icon-12/*.svg')
		.pipe(iconfontCss({
			fontName: 'icon-12',
			path: 'src/fonts/.template-12',
			targetPath: '../fonts/icon-12.css'
		}))
		.pipe(iconfont({
			fontName: 'icon-12',
			normalize: true,
			log: function() {}
		}))
		.pipe(gulp.dest('build/fonts/'));
});

gulp.task('fonts16', function() {
	return gulp.src('src/fonts/icon-16/*.svg')
		.pipe(iconfontCss({
			fontName: 'icon-16',
			path: 'src/fonts/.template-16',
			targetPath: '../fonts/icon-16.css'
		}))
		.pipe(iconfont({
			fontName: 'icon-16',
			normalize: true,
			log: function() {}
		}))
		.pipe(gulp.dest('build/fonts/'));
});

gulp.task('galano', function () {
		return gulp.src(['src/fonts/galano/*'])
				.pipe(gulp.dest('build/fonts/galano'));
});

//images
gulp.task('images', function () {
		return gulp.src(['src/images/*'])
				.pipe(gulp.dest('build/images'));
});

gulp.task('watch', function() {
	gulp.watch('src/*.scss', ['build']);
});
