'use strict';
/**
 * Clean task.
 */

const gulp = require('gulp'),
  del = require('del');

gulp.task('clean', callback => {
  del([minigulp.getPath('pug', 'dest')], callback);
  callback();
});
