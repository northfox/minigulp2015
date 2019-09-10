'use strict';
/**
 * Jade task.
 */

const gulp = require('gulp'),
  config = minigulp.config,
  $ = minigulp.plugins;

gulp.task('jade', () => {
  return gulp
    .src(minigulp.getPath('jade'))
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe(
      $.jade({
        data: require(config.jade.data, true),
        pretty: true,
      })
    )
    .pipe(gulp.dest(minigulp.getPath('jade', 'dest')))
    .pipe($.size({ title: 'jade' }))
    .pipe($.browser.stream());
});
