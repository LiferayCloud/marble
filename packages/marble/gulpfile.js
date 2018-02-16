var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var postcss = require('gulp-postcss');
var postcssAutoprefixer = require('autoprefixer');
var postcssScss = require('postcss-scss');
var sass = require('gulp-sass');

// All -------------------------------------------------------------------------

gulp.task('default', ['bootstrap', 'fonts']);

// Bootstrap -------------------------------------------------------------------

gulp.task('watch', () => {
  gulp.watch('src/**/*.scss', ['bootstrap']);
});

gulp.task('bootstrap', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sass({includePaths: ['../../node_modules'], outputStyle: 'compressed'}))
    .pipe(postcss([
      postcssAutoprefixer()
    ], {
      syntax: postcssScss
    }))
    .pipe(gulp.dest('build'));
});

// Fonts -----------------------------------------------------------------------

gulp.task('fonts', ['font-icon-12', 'font-icon-16', 'font-galano']);

gulp.task('font-icon-12', () => {
  return gulp.src('src/fonts/icon-12/*.svg')
    .pipe(iconfontCss({
      fontName: 'icon-12',
      path: 'src/fonts/.template-12',
      targetPath: 'icon-12.css'
    }))
    .pipe(iconfont({
      fontName: 'icon-12',
      normalize: true,
      log: () => {}
    }))
    .pipe(gulp.dest('build/fonts/icon-12'));
});

gulp.task('font-icon-16', () => {
  return gulp.src('src/fonts/icon-16/*.svg')
    .pipe(iconfontCss({
      fontName: 'icon-16',
      path: 'src/fonts/.template-16',
      targetPath: 'icon-16.css'
    }))
    .pipe(iconfont({
      fontName: 'icon-16',
      normalize: true,
      log: () => {}
    }))
    .pipe(gulp.dest('build/fonts/icon-16'));
});

gulp.task('font-galano', function () {
  return gulp.src(['src/fonts/galano/*'])
    .pipe(gulp.dest('build/fonts/galano'));
});
