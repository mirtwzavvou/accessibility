var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile Our Sass
gulp.task('styles', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);