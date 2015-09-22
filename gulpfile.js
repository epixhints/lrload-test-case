var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var lrload = require('livereactload');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('default', function () {
  rebundle = function () {
    console.log('bundling')
    return bundler.bundle()
      .on('error', console.log)
      .pipe(source('out.js'))
      .pipe(gulp.dest('./dist'));
  };

  props = watchify.args
  props.extensions = ['.jsx', '.js']

  bundler = watchify(browserify(props));

  bundler.transform(reactify);
  bundler.transform(lrload);

  bundler.add('./app.jsx');

  bundler.on('update', rebundle)

  lrload.monitor('./dist/out.js')

  return rebundle()
});
