'use strict';

module.exports = {
  autoTest: true,

  // Server
  server: {
    ghostMode: {
      clicks: false,
      location: false,
      forms: false,
      scroll: false,
    },
  },

  // Pug for html
  pug: {
    options: {
      pretty: true,
    },
    data: '../src/pug.json',
  },

  // Style
  style: {
    sass: {
      options: {
        errLogToConsole: true,
        sourceComments: 'normal',
        sourceMap: false,
        compass: true,
        precision: 10,
        style: 'compressed',
      },
    },
    autoprefixer: {
      browsers: ['last 3 version', 'ie >= 9', 'Android 4.0'],
      ignore: [],
    },
    mqpacker: {},
  },
  // path
  path: {
    html: {
      src: ['dist/**/*.html', '!dist/lib/**/*'],
    },
    pug: {
      watch: ['src/**/*.pug', 'src/**/*.html', '!src/lib/**/*'],
      src: ['src/**/*.pug', '!src/**/_*.pug', '!src/lib/**/*'],
      dest: 'dist/',
    },
    sass: {
      src: ['src/sass/**/*.scss', '!src/lib/**/*'],
      dest: 'dist/css',
    },
    js: {
      watch: 'src/**/*.js',
      src: ['src/js/*.js', '!src/js/_*.js', '!src/lib/**/*'],
      dest: 'dist/js',
    },
    images: {
      src: 'src/images/**/*',
      dest: 'dist/images',
    },
  },
};
