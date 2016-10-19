'use strict';

var gulp = require('gulp'),
	less = require('gulp-less'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	clean = require('gulp-clean'),
	debug = require('gulp-debug'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	runSequence = require('run-sequence'),
	watch = require('gulp-watch'),
	LessAutoprefix = require('less-plugin-autoprefix'),
	autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });


gulp.task('css', function(cb){
	gulp.src(['node_modules/normalize.css/normalize.css','node_modules/bootstrap-grid/dist/grid.min.css','node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css','src/accordeon/accordeon-style.css','src/slider/css/style.css','src/css/*.less'])
		.pipe(sourcemaps.init())
		.pipe(less({
    			plugins: [autoprefix]
  		}))
		.pipe(concat('styles.css'))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/css'));
	cb();
});

gulp.task('js', function(cb){
	gulp.src(['node_modules/jquery/dist/jquery.min.js','node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js','src/accordeon/accordeon.js','src/slider/js/slider.js','src/js/*.js'])
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
	gulp.src('src/fonts/*.*')
		.pipe(gulp.dest('public/fonts'));
	cb();
});

gulp.task('img', ['clean-img'] , function(cb){
	gulp.src('src/images/**/*.*')
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
	gulp.watch('src/images/**/*.*', ['img']);
});


// add to sequence watch
gulp.task('default', function(cb){
	runSequence('clean', 'build', 'watch', cb);
});
