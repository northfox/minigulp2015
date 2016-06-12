'use strict';
/**
 * Unit test task.
 */

const gulp   = require('gulp'),
      config = minigulp2015.config,
      Server = require('karma').Server,
      CONFFILE = process.cwd() + '/karma.conf.js';

const generateTestTask = (watch) => {
  const server = new Server({
    configFile: CONFFILE,
    singleRun: true,
    autoWatch: watch ? true : false
  });
};

gulp.task('test', () => {
  return generateTestTask(false);
});
gulp.task('test:watch', () => {
  return generateTestTask(true);
});
