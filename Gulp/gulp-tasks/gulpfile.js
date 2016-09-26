'use strict';

var gulp = require('gulp');
var path = require('path');

// запускать командой gulp без аргументов, так как это 'default' task
gulp.task('default', function() {
	// вывести в консоль информацию о текущем файле
	gulp.src('src/**/*.*')
		.on('data', function(file){
			console.log({
				contents: file.contents,
				path: file.path,
				cwd: file.cwd,
				base: file.base,
				relative: file.relative,
			});
		})
		// разбить по папкам в зависимости от типа файла
		.pipe( gulp.dest(function(file){
			if ( path.extname(file.path) == '.js' ) {
				return 'public/js';
			}
			if ( path.extname(file.path) == '.css' ) {
				return 'public/css';
			}
			return 'public';
		}));
});

// gulp.src('src/**/*.{js,css}')
// gulp.src('{src1,src2}/**/*.{js,css}')
// gulp.src(['src/**/*.js', 'src/**/*.css']) сначала js потом css
// gulp.src(['**/*.*', '!node_modules/**']) не в коем случае
// gulp.src('**/*.*', {read: false}) для фильмов музыки и др. больших файлов