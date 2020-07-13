
    // -[] Sass compiler -
    // [] AutoPrefix the CSS -
    // [] Find a watch and reload


    const gulp = require("gulp");
    const sass = require("gulp-sass");
    sass.compiler = require('sass');
    const autoprefixer = require("gulp-autoprefixer");
    const babel = require('gulp-babel');


    function babelJS() {
        return gulp.src('src/js/app.js', {allowEmpty:true})
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('src/js/dist'))
    }


    function scssCompile() {
        return gulp.src('src/scss/main.scss', {allowempty : true})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
    };

    function autoprefix() {
        return gulp.src('src/css/main.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/css'))
    }
    


    function watchFiles() {
        
        gulp.watch('src/**/*.scss', gulp.series(scssCompile, autoprefix));
        console.log("\r\n Watching Scss files ");

        gulp.watch('src/js/*.js', babelJS) ;
        console.log(" Watching JS files \r\n");
    }

exports.styles = gulp.series(scssCompile,autoprefix);
exports.watch = watchFiles;
exports.babel = babelJS
