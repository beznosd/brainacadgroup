'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
// new 
const sourcemaps = require('gulp-sourcemaps');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

// $ NODE_ENV=production gulp styles

// gulp.task('css', function(cb){
// 	gulp.src('src/**/*.{css,less}')
// 		.pipe(sourcemaps.init())
// 		.pipe(less())
// 		.pipe(concat('all.css'))
// 		.pipe(cleanCSS())
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest('public/css'));
// 	cb();
// });

gulp.task('css', function(cb){
	var pipeline = gulp.src('src/**/*.{css,less}');

	console.log(isDevelopment);

	if (isDevelopment) {
		pipeline = pipeline.pipe(sourcemaps.init());
	}

	pipeline = pipeline.pipe(less())
		.pipe(concat('all.css'))
		.pipe(cleanCSS());

	if (isDevelopment) {
		pipeline = pipeline.pipe(sourcemaps.write());
	}

	pipeline = pipeline.pipe(gulp.dest('public/css'))

	return pipeline;
});

// add source map here
gulp.task('js', function(cb){
	gulp.src('src/**/*.js')
		.pipe(concat('index.js'))
		.pipe(uglify())
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
