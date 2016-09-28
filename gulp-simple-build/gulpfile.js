const gulp = require('gulp');

const less = require('gulp-less');

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
	gulp.run('styles');
	gulp.run('assets');
});

