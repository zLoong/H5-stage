var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var cssmin = require('gulp-clean-css');


gulp.task('sass', function () {
    return gulp.src('src/style/index.scss')   
        .pipe(sass())
        .pipe(postcss([
            require('postcss-gradientfixer'),
            require('autoprefixer')({
                browsers: ['last 4 versions', 'Android >= 4.0'],
                cascade: true,
                remove: true
            })
        ]))     
        .pipe(gulp.dest('src/css/'));
});

gulp.task('cssmin', function () {
    return gulp.src('src/css/index.css')
        .pipe(cssmin())
        .pipe(gulp.dest('src/css/'))
});

 gulp.task('style',['sass','cssmin'],function(done){
    console.log('sass & cssmin');
});

