'use strict';
/**
 * Style task.
 */

const gulp   = require('gulp'),
      config = minigulp2015.config,
      $      = minigulp2015.plugins,
      pkg    = minigulp2015.pkg;

gulp.task('style', () => {
  if(minigulp2015.option.dev) {
    config.style.sass.options.sourceMap = true;
    config.style.sass.options.style = 'expanded';
  }

  return gulp.src(minigulp2015.getPath('sass'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.sass(config.style.sass.options))
    .pipe($.autoprefixer(config.style.autoprefixer.browsers))
    .pipe($.if(minigulp2015.option.min, $.cssnano()))
    .pipe(gulp.dest(minigulp2015.getPath('sass', 'dest')))
    .pipe($.size({title: 'style'}))
    .pipe($.browser.reload({stream: true}));
});
