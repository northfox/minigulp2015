'use strict';
/**
 * Image minify task.
 */

const gulp   = require('gulp'),
      config = minigulp2015.config,
      $      = minigulp2015.plugins;

gulp.task('imagemin', () => {
  return gulp.src(minigulp2015.getPath('images'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.imagemin(config.imagemin.options))
    .pipe(gulp.dest(minigulp2015.getPath('images', 'dest')))
    .pipe($.size({title: 'imagemin'}))
    .pipe($.browser.reload({stream: true}));
});
