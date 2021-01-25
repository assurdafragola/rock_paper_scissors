
// Mówimy node-owi, żeby zajrzał do folderu node_modules i poszukał gulp-a.

var gulp = require("gulp")


//jshint - narzędzie do wykrywania błędów w kodzie JS

// var jshint = require("gulp-jshint")

// gulp.task("jshint", function() {
//     return gulp.src("js/*.js")
//     .pipe(jshint())
//     .pipe(jshint.reporter("default"))
// });


//Sass 

var sass = require("gulp-sass");

gulp.task("sass", function() {
    return gulp.src("scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(sass({outputStyle: 'compressed'})) //why it does not work?
    .pipe(gulp.dest("css"))

});

gulp.task("watch", function() {
    gulp.watch("scss/**/*.scss", gulp.series("sass"))
    // Gulp będzie nasłuchiwał zmian w każdym pliku, który ma rozszerzenie .scss oraz znajduje się w katalogu scss, nieważne jak głęboko.
});



// //Sourcemaps - ułatwia znalezienie błędu w scss 
// var sourcemaps = require('gulp-sourcemaps');

// //nie działa!
// gulp.task('sass', function() {
//     return gulp.src('scss/main.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass({errLogToConsole: true}))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('css'))
// })
