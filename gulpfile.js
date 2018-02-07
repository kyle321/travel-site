var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default', function(){
	console.log('gulp task has started')
})
gulp.task('html', function(){
	console.log('big brother is watching')
})

gulp.task('watch',function(){
		watch('./app/index.html', function(){
		gulp.start('html')
	})
})

gulp.task('styles',function(){
	return gulp.src('./app/assets/css/main.css').
	pipe(postcss([cssvars, nested, autoprefixer])).
	pipe(gulp.dest('./app/assets/temp/main'));
})

watch('./app/assets/css/main.css', function(){
	gulp.start('styles');
})
