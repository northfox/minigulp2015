'use strict';
/**
 * HTML task.
 */

const gulp = require('gulp'),
  config = minigulp.config,
  $ = minigulp.plugins;

gulp.task('html', () => {
  return gulp
    .src(minigulp.getPath('html'))
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe($.htmlhint(config.htmlhint))
    .pipe($.htmlhint.reporter())
    .pipe($.htmlhint.failReporter())
    .pipe($.browser.stream());
});
