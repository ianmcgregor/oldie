/* jshint strict: false */
var browserify = require('browserify'),
    chalk = require('chalk'),
    gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    jshint = require('gulp-jshint'),
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    strip = require('gulp-strip-debug'),
    uglify = require('gulp-uglify');

// paths and file names
var src = './src/',
    dist = './dist/',
    index = 'oldie.js',
    bundle = 'oldie.js',
    bundleMin = 'oldie.min.js';

//log
function logError(msg) {
  console.log(chalk.bold.red('[ERROR] ' + msg.toString()));
}

// build bundled js using browserify
function buildJS(debug, minify) {
  var bundleName = minify ? bundleMin : bundle;

  return browserify(src + index, {debug: debug})
    .bundle()
    .on('error', logError)
    .pipe(source(bundleName))
    .pipe(gulpIf(minify, streamify(strip())))
    .pipe(gulpIf(minify, streamify(uglify())))
    .pipe(gulp.dest(dist));
}

gulp.task('bundle', function() {
  buildJS(false, false);
  buildJS(false, true);
});

// js hint - ignore libraries and bundled
gulp.task('jshint', function() {
  return gulp.src([
      './gulpfile.js',
      src+'/**/*.js',
      'test/**/*.js',
      '!src/lib/addEventListener.js'
    ])
    .pipe(jshint({
      'node': true,
      'browser': true,
      'es5': false,
      'esnext': true,
      'bitwise': false,
      'camelcase': false,
      'curly': true,
      'eqeqeq': true,
      'immed': true,
      'latedef': true,
      'newcap': true,
      'noarg': true,
      'quotmark': 'single',
      'regexp': true,
      'undef': true,
      'unused': true,
      'strict': true,
      'trailing': true,
      'expr': true, // stops complaints about 'to.be.true' etc in tests

      'predef': [
          'Modernizr',
          'ga',
          'FB',
          'define',
          'describe',
          'it',
          'expect',
          'beforeEach',
          'afterEach'
      ]
  }))
  .pipe(jshint.reporter('jshint-stylish'));
});

// watch
gulp.task('watch', function() {
  gulp.watch(src+'**/*.js', ['jshint']);
});

// default
gulp.task('default', ['jshint', 'watch']);
