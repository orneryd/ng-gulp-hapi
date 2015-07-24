'use strict';

/**
 * Watch files, and do things when they changes.
 * Recompile scss if needed.
 * Reinject files
 */

var _          = require('lodash');
var gulp       = require('gulp');
var bwsrsync   = require('browser-sync').create();
var watch      = require('gulp-watch');
var inject     = require('gulp-inject');
var sass       = require('gulp-sass');

module.exports = function () {
  bwsrsync.init();

  gulp.watch(['bower.json', 'client/.index.html'], ['inject']);

  gulp.watch([
    'client/**/*.scss',
    '!client/bower_components/**/*.scss'
  ], ['sass']);

  var coreFiles = [
    '!client/bower_components/**/*',
    '!client/**/*.scss',
    '!client/**/*spec.js',
    'client/**/*.html',
    'client/**/*.js'
  ];

  watch(coreFiles, {events: ['add', 'unlink']}, function(){
    gulp.start('inject');
  });
  watch(_.union(coreFiles,[
    'client/index.html',
    'client/app.js'
  ]), bwsrsync.reload);

  bwsrsync.watch('client/styles/css/*.css').on('change', function(){
    bwsrsync.reload('*.css');
  });
};
