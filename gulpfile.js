var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var minify = require('gulp-minify');

var src_sass = './src/dist/scss/**/*.scss';
var dest_css = './src/assets/css';
var src_html = './src/*.html';
var src_js = './src/dist/js/**/*.js';
var dest_js = './src/assets/js';

gulp.task('sass', function () {
  return gulp.src(src_sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(sass())
    .pipe(prefix({
      browsers: ['last 3 versions']
    }))
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(dest_css))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts', function() {
  return gulp.src(src_js)
    .pipe(concat('script.js'))
    .pipe(minify({
      ext:{
          // src:'-debug.js',
          min:'.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest(dest_js));
});

gulp.task('watch', function () {

  browserSync.init({
    browser: "chrome",
    server: './src/'
  });
  gulp.watch(src_sass, ['sass']);
  gulp.watch(src_js, ['scripts']);
  gulp.watch(src_html).on('change', browserSync.reload);
  gulp.watch(src_js).on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'sass']);