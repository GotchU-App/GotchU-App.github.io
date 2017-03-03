var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('compress-js', function() {
	 gulp.src('js/*.js')
		.pipe(minify())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['minify-css', 'compress-js']);