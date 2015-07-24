'use strict';

var gulp = require('gulp');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

gulp.task('default',    ['serve']);
gulp.task('serve',      ['watch'],          require('./tasks/serve').nodemon);
gulp.task('watch',      ['inject'],         require('./tasks/watch'));
gulp.task('inject',     ['sass', 'jshint'], require('./tasks/inject'));
gulp.task('inject-scss',                    require('./tasks/inject-scss'));
gulp.task('sass',       ['inject-scss'],    require('./tasks/sass'));
gulp.task('preview',    ['build'],          require('./tasks/preview'));
gulp.task('build',                          require('./tasks/build'));
gulp.task('version',                        require('./tasks/chore').version);
gulp.task('control',                        require('./tasks/control'));
gulp.task('test',                           require('./tasks/test').test);
gulp.task('tdd',                            require('./tasks/tdd').tdd);
gulp.task('jshint'   ,                      require('./tasks/jshint'));
