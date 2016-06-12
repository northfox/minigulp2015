'use strict';
/**
 * Jade task.
 */

const gulp   = require('gulp'),
      config = minigulp2015.config,
      $      = minigulp2015.plugins;

gulp.task('jade', () => {
  return gulp.src(minigulp2015.getPath('jade'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.jade({
      data: require(config.jade.data, true),
      pretty: true
    }))
    .pipe(gulp.dest(minigulp2015.getPath('jade', 'dest')))
    .pipe($.size({title: 'jade'}))
    .pipe($.browser.stream());
});
