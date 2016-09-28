var gulp = require('gulp');

var less = require('gulp-less');

var runSequence = require('run-sequence');

gulp.task('styles', function(){
	gulp.src('src/styles/main.less')
		.pipe(less())
		.pipe(gulp.dest('public/styles'));
});

gulp.task('assets', function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('public'));
});

gulp.task('build', function(){
	runSequence('styles','assets');
});

