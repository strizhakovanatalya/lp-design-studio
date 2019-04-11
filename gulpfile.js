var gulp = require('gulp');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var postcss      = require('gulp-postcss');
var rename = require('gulp-rename');

gulp.task('default', function () {
    return gulp.src('./www/css/style.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(csso())
        .pipe(rename({
            suffix: 'min'
        }))
        .pipe(gulp.dest('./docs/css'));

});

