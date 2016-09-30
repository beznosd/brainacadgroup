'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
//new
var clean = require('gulp-clean');
var gulpIf = require('gulp-if');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
// $ NODE_ENV=production gulp styles


gulp.task('css', function(cb){
	gulp.src('src/**/*.{css,less}')

		.pipe( gulpIf(isDevelopment, sourcemaps.init()) )

		.pipe(less())
		.pipe(concat('all.css'))
		.pipe(cleanCSS())

		.pipe( gulpIf(isDevelopment, sourcemaps.write()) )

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
	gulp.src('src/*.html')
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

// gulp.task('watch', function(){
// 	gulp.watch('src/css/**/*.*', ['css']);
// 	// js
// 	// html
// });

// gulp.task('default', function(){
	
// });


















gulp.task('watch', function(cb){
	gulp.watch('src/**/*.{css,less}', ['css']);
	gulp.watch('src/**/*.js', ['js']);
	gulp.watch('src/index.html', ['html']);
	cb();
});

gulp.task('default', function(cb){
	runSequence('clean', 'build', 'watch', cb);
});

// gulp.watch('src/**/*.*', ['build']);

