'use strict';
/**
 * HTML task.
 */

const gulp   = require('gulp'),
      config = minigulp2015.config,
      $      = minigulp2015.plugins;

gulp.task('html', () => {
  return gulp.src(minigulp2015.getPath('html'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.htmlhint(minigulp2015.config.htmlhint))
    .pipe($.htmlhint.reporter())
    .pipe($.htmlhint.failReporter())
    .pipe($.browser.stream());
});
