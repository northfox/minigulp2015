'use strict';
/**
 * Unit test task.
 */

const gulp   = require('gulp'),
      config = minigulp2015.config,
      Server = require('karma').Server,
      CONFFILE = process.cwd() + '/karma.conf.js';

const generateTestTask = (watch, callback) => {
  const server = new Server({
    configFile: CONFFILE,
    autoWatch: watch ? true : false
  });
  
  if(callback) server.start(callback);
};

gulp.task('test', (callback) => {
  return generateTestTask(false, callback);
});
gulp.task('test:watch', () => {
  return generateTestTask(true, null);
});

