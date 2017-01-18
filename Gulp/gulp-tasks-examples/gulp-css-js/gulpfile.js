'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');


gulp.task('css', function(cb){
	gulp.src('src/**/*.{css,less}')
		.pipe(debug({title: 'src: '}))
		.pipe(less())
		.pipe(debug({title: 'less: '}))
		.pipe(concat('all.css'))
		.pipe(debug({title: 'concat: '}))
		.pipe(cleanCSS({debug: true}, function(details){
			console.log('BEFORE: ' + details.name + ' => ' + details.stats.originalSize + ' bytes');
			console.log('AFTER: ' + details.name + ' => ' + details.stats.minifiedSize + ' bytes');
		}))
		.pipe(debug({title: 'minify: '}))
		.pipe(gulp.dest('public/css'));
	cb();
});

gulp.task('build', function(cb){
	runSequence(['html'], cb);
});

