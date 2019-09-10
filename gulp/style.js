'use strict';
/**
 * Style task.
 */

const gulp = require('gulp'),
  config = minigulp.config,
  $ = minigulp.plugins;

gulp.task('style', () => {
  if (minigulp.option.dev) {
    config.style.sass.options.sourceMap = true;
    config.style.sass.options.style = 'expanded';
  }

  return gulp
    .src(minigulp.getPath('sass'))
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe($.sass(config.style.sass.options))
    .pipe($.autoprefixer(config.style.autoprefixer.browsers))
    .pipe($.if(minigulp.option.min, $.cssnano()))
    .pipe(gulp.dest(minigulp.getPath('sass', 'dest')))
    .pipe($.size({ title: 'style' }))
    .pipe($.browser.reload({ stream: true }));
});
