const gulp = require('gulp');
const jshint = require('gulp-jshint');
const autoprefixer = require('gulp-autoprefixer');
const purgecss = require('gulp-purgecss')
const gulpImagemin = require('gulp-imagemin');

gulp.task('default', function() {
    console.log("hello gulp ~!")
});

gulp.task('lint', function() {
    return gulp.src('Web/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('autoprefixer', () => {
    return gulp.src('CoStyle/style.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ["Android 4.1","iOS 7.1","Chrome > 31","ff > 31","ie >= 8"],
            grid: true
        }))
        .pipe(gulp.dest('build/prefixer'))
});

gulp.task('purgecss', () => {
    return gulp.src('CoStyle/**.css')
        .pipe(purgecss({
            content: ['Web/html/*.html'],
            whitelist: ['active','on']
        }))
        .pipe(gulp.dest('build/css'))
});
gulp.task('image', function () {
    return gulp.src('CoStyle/imgs/*')
        .pipe(gulpImagemin())
        .pipe(gulp.dest('build/images'));
});


gulp.task('default', gulp.parallel('default'));
gulp.task('final', gulp.series('lint','autoprefixer','purgecss'));