'use strict';
/**
 * CoffeeScript task.
 */


const gulp   = require('gulp'),
      config = minigulp2015.config,
      $      = minigulp2015.plugins;

gulp.task('coffee', () => {
  return gulp.src(minigulp2015.getPath('coffee'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.coffee(config.coffee.options))
    .pipe(gulp.dest(minigulp2015.getPath('coffee', 'dest')));
});
