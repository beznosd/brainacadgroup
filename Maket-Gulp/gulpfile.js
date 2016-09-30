'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var watch = require('gulp-watch');


gulp.task('css', function(cb){
	gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css','src/css/*.css'])
		.pipe(sourcemaps.init())
		.pipe(concat('style.css'))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/css'));
	cb();
});

gulp.task('js', function(cb){
	gulp.src(['bower_components/jquery/dist/jquery.js','bower_components/bootstrap/dist/js/bootstrap.js','src/js/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/js'));
	cb();
});

gulp.task('html', function(cb){
	gulp.src('src/index.html')
		.pipe(gulp.dest('public'));
	cb();
});

gulp.task('clean', function(cb){
	return gulp.src('public', {read: false})
		.pipe(clean());
});

gulp.task('clean-fonts', function(cb){
	return gulp.src('public/fonts', {read: false})
		.pipe(clean());
});

gulp.task('clean-img', function(cb){
	return gulp.src('public/images', {read: false})
		.pipe(clean());
});

gulp.task('fonts',['clean-fonts'],function(cb){
	gulp.src('bower_components/bootstrap/dist/fonts/*.*')
		.pipe(gulp.dest('public/fonts'));
	cb();
});

gulp.task('img', ['clean-img'] , function(cb){
	gulp.src('src/images/*.*')
		.pipe(gulp.dest('public/images'));
	cb();
});

gulp.task('build', function(cb){
	runSequence(['css','html','js','fonts','img'], cb);
});


gulp.task('watch', function(cb){
	gulp.watch('src/css/*.*', ['css']);
	gulp.watch('src/js/*.*', ['js']);
	gulp.watch('src/*.html', ['html']);
	gulp.watch('src/fonts/*.*', ['fonts']);
	gulp.watch('src/img/*.*', ['img']);
});


// add to sequence watch
gulp.task('default', function(cb){
	runSequence('clean', 'build', 'watch', cb);
});


