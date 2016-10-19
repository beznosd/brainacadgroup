'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var gulpIf = require('gulp-if');
var clean = require('gulp-clean');

// new 
var browserSync = require('browser-sync').create();

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
// $ NODE_ENV=production gulp styles


gulp.task('css', function(cb){
	gulp.src('src/**/*.{css,less}')
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

gulp.task('img', function(cb) {
	gulp.src('src/images/**/*.*')
		.pipe(gulp.dest('public/images'));
	cb();
});

gulp.task('fonts', function(cb) {
	gulp.src('src/fonts/**/*.*')
		.pipe(gulp.dest('public/fonts'));
	cb();
});


gulp.task('clean', function(cb){
	return gulp.src('public', {read: false})
		.pipe(clean());
});

gulp.task('build', ['clean'], function(cb){
	runSequence(['html', 'css', 'js', 'img', "fonts"], cb);
});

gulp.task('watch', function(cb){
	gulp.watch('src/**/*.{css,less}', ['css']);
	gulp.watch('src/**/*.js', ['js']);
	gulp.watch('src/index.html', ['html']);
	cb();
});

gulp.task('run', function(cb){
	runSequence('build', 'watch', cb);
});

gulp.task('sync', function(cb){
	browserSync.init({
		server: 'public'
	});

	browserSync.watch('src/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', function(cb){
	runSequence('build', ['watch', 'sync'], cb);
});

