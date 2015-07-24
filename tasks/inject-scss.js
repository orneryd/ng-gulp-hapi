'use strict';

/**
 * Inject scss files in app.scss
 */

var gulp = require('gulp');
var _ = require('lodash');
var inject = require('gulp-inject');
var sort = require('gulp-sort');

module.exports = function () {

  var bowerSources = gulp.src([
    'client/bower_components/foundation/scss/foundation.scss'
  ], {read: false});

  var bowerOpts = {
    relative: true,
    transform: function (filePath) {
      return '@import \'' + filePath + '\';';
    },
    starttag: '// inject:bower',
    endtag: '// end:bower'
  };

  var scssSources = gulp.src([
    'client/components/**/*.scss',
    'client/views/**/*.scss',
    'client/directives/**/*.scss',
    'client/modals/**/*.scss'
  ], {read: false}).pipe(sort());

  var scssOpts = {
    relative: true,
    transform: function (filePath) {
      return '@import \'' + filePath + '\';';
    },
    starttag: '// inject:scss',
    endtag: '// end:scss'
  };

  return gulp.src('client/app.scss')
    .pipe(inject(bowerSources, bowerOpts))
    .pipe(inject(scssSources, scssOpts))
    .pipe(gulp.dest('client'));
};
