'use strict';
/**
 * Scripts task.
 */

const gulp    = require('gulp'),
      config  = minigulp2015.config,
      $       = minigulp2015.plugins,
      conf    = require('../webpack.config.js'),
      through = require('through2'),
      path    = require('path');

const generateScriptTask = (conf, watch) => {
  if(watch === true) {
    conf.watch = true;
  } else {
    conf.watch = false;
  }
  return gulp.src(minigulp2015.getPath('js'))
    .pipe(through.obj(function(file, charset, callback) {
      const fileName = path.basename(file.path, path.extname(file.path));
      conf.entry = conf.entry || {};
      conf.entry[fileName] = file.path;
      this.push(file);
      callback();
    }))
    .pipe($.webpack(conf))
    .pipe($.if(minigulp2015.option.min, $.uglify()))
    .pipe(gulp.dest(minigulp2015.getPath('js', 'dest')))
    .pipe($.browser.reload({stream: true}));
};

gulp.task('script', () => {
  return generateScriptTask(conf);
});
gulp.task('script:watch', () => {
  return generateScriptTask(conf, true);
});
