'use strict';
/**
 * Clean task.
 */

const gulp   = require('gulp'),
      del    = require('del');

gulp.task('clean', (callback) => {
  del([minigulp2015.getPath('jade', 'dest')], callback);
  callback();
});
