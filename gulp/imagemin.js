'use strict';
/**
 * Image minify task.
 */

const gulp = require('gulp'),
  config = minigulp.config,
  $ = minigulp.plugins;

gulp.task('imagemin', () => {
  return gulp
    .src(minigulp.getPath('images'))
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe($.imagemin(config.imagemin.options))
    .pipe(gulp.dest(minigulp.getPath('images', 'dest')))
    .pipe($.size({ title: 'imagemin' }))
    .pipe($.browser.reload({ stream: true }));
});
