'use strict';
/**
 * Server task.
 */

const gulp   = require('gulp'),
      config = minigulp2015.config,
      $      = minigulp2015.plugins,
      // https://www.npmjs.com/package/connect-modrewrite
      //  - [L] If a path matches, any subsequent rewrite rules will be disregarded.
      rewrite = require('connect-modrewrite');;

gulp.task('server', () => {
  return $.browser({
    server: {
      baseDir: 'dist',
      directory: false,
      middleware: [
        rewrite([
          '^[^\\.]*$ /index.html [L]'
        ])
      ]
    },
    port: minigulp2015.option.port,
    notify: false,
    ghostMode: {
      clicks: false,
      location: false,
      forms: false,
      scroll: false
    }
  });
});

gulp.task('server:reload', () => {
  $.browser.reload();
});
