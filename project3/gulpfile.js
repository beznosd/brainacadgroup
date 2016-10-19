var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

var gulp = require('gulp');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var gulpIf = require('gulp-if');
//new
var clean = require('gulp-clean');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
// $ NODE_ENV=production gulp styles


gulp.task('css', function(cb){
	gulp.src('src/**/*.{css}')
		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(less())
		.pipe(concat('all.css'))
		.pipe(cleanCSS())
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('public/css'));
	cb();
});

gulp.task('js', function(cb){
	gulp.src('src/**/*.js')
		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(concat('index.js'))
		.pipe(uglify())
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('public/js'));
	cb();
});

gulp.task('html', function(cb){
	gulp.src('src/index.html')
		.pipe(gulp.dest('public'));
	cb();
});

gulp.task('build', function(cb){
	runSequence(['html', 'css', 'js'], cb);
});

gulp.task('clean', function(cb){
	return gulp.src('public', {read: false})
		.pipe(clean());
});

/*
* Code for watch task
*/


// add to sequence watch
gulp.task('default', function(cb){
	runSequence('clean', 'build', cb);
});

// gulp.watch('src/**/*.*', ['build']);
