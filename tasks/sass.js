'use strict';

/**
 * Compile sass
 */

var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');


module.exports = function () {
  return gulp.src([
    'client/app.scss'
  ])
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('client/styles/css'));
};
