'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
// new 
var sourcemaps = require('gulp-sourcemaps');

var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
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

// pipeline цепочка обработки которую мы так условным образом модифицируем
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

	pipeline.pipe(gulp.dest('public/css'));

	cb();
});

// const gulpIf = require('gulp-if');
// gulp.task('css', function(cb){
// 	gulp.src('src/**/*.{css,less}')
// 		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
// 		.pipe(less())
// 		.pipe(concat('all.css'))
// 		.pipe(cleanCSS())
// 		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
// 		.pipe(gulp.dest('public/css'));
// 	cb();
// });

// add source map here
gulp.task('js', function(cb){
	// gulp.src('src/**/*.js')
	// 	.pipe(concat('index.js'))
	// 	.pipe(uglify())
	// 	.pipe(gulp.dest('public/js'));

	var pipeline = gulp.src('src/**/*.js');

	console.log(isDevelopment);

	if (isDevelopment) {
		pipeline = pipeline.pipe(sourcemaps.init());
	}

	pipeline = pipeline.pipe(concat('index.js'))
					.pipe(uglify());

	if (isDevelopment) {
		pipeline = pipeline.pipe(sourcemaps.write());
	}

	pipeline.pipe(gulp.dest('public/js'));

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

// gulp.task('watch', function(cb){
// 	gulp.watch('src/css/*.', ['css']);
// 	gulp.watch('src/js/*.*', ['js']);
// 	gulp.watch('src/html/*.*', ['html']);
// });

// gulp.watch('src/**/*.*', ['build']);
