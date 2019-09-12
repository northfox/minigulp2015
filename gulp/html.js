'use strict';
/**
 * Html task.
 */

const gulp = require('gulp'),
  config = minigulp.config,
  $ = minigulp.plugins;

gulp.task('pug', () => {
  return gulp
    .src(minigulp.getPath('pug'))
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe(
      $.pug({
        data: require(config.pug.data, true),
        pretty: true,
      })
    )
    .pipe(gulp.dest(minigulp.getPath('pug', 'dest')))
    .pipe($.size({ title: 'pug' }))
    .pipe($.browser.stream());
});
