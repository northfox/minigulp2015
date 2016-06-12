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
    config.sass.options.sourceMap = true;
    config.sass.options.style = 'expanded';
  }

  return gulp.src(minigulp2015.getPath('sass'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.sass(config.sass.options))
    .pipe($.autoprefixer(config.autoprefixer.browser))
    .pipe($.if(minigulp2015.option.min, $.csso()))
    .pipe($.if(minigulp2015.option.min, $.csscomb()))
    .pipe($.if(minigulp2015.option.min, $.cssmin()))
    .pipe(gulp.dest(minigulp2015.getPath('sass', 'dest')))
    .pipe($.size({title: 'style'}))
    .pipe($.browser.reload({stream: true}));
});
