const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style(){
    //location of css file
    return gulp.src('./scss/**/*.scss')
    //pass file through sass compiler
        .pipe(sass().on('error', sass.logError))
    //store compile css
        .pipe(gulp.dest('./css'))
    // stream changes to all browsers
        .pipe(browserSync.stream());
}

//watch
function watch(){
    browserSync.init({
       server: {
           baseDir: './'
       }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;