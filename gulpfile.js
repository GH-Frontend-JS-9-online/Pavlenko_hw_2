const gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    Filter = require('gulp-filter'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

const cssFiles=[
    './src/css/form.styl',
    './src/css/header.styl',
    './src/css/style.styl',
    './src/css/welcome_aboutMe.styl',
    './src/css/ExpertIn.styl',
    './src/css/LatestWorks.styl',
    './src/css/Clients.styl',
    './src/css/popUp.styl',
    './src/css/footer.styl',
    './src/css/media.styl',
];
const jsFiles=[
    './src/js/script.js',
];
const htmlFiles=[
    './src/html/header.html',
    './src/html/welcome.html',
    './src/html/aboutMe.html',
    './src/html/ExpertIn.html',
    './src/html/LatestWorks.html',
    './src/html/Clients.html',
    './src/html/hireMe.html',
    './src/html/WorkFullViewBox.html',
    './src/html/menuPopUp.html',
    './src/html/footer.html',
]
// styles css
function styles(){
    var filter = Filter('**/*.styl', { restore: true });
    return gulp.src(cssFiles)
        .pipe(filter)
        .pipe(stylus())
        .pipe(filter.restore)
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level:2
        }))
        .pipe(gulp.dest('./build/assets/css/'))
        .pipe(browserSync.stream());

}

// scripts js
function scripts() {
  return gulp.src(jsFiles)
      .pipe(concat('script.js'))
      .pipe(gulp.dest('./build/assets/js/'))
      .pipe(browserSync.stream());
}

function html() {
    return gulp.src(htmlFiles)
        .pipe(concat('index.html'))
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    gulp.watch('./src/css/**/*.styl', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./src/html/**/*.html', html);
    gulp.watch("./build/*.html").on('change', browserSync.reload);
}

// run function
gulp.task('styles', styles);
gulp.task('scripts', scripts);


gulp.task('watch', watch);


gulp.task('build', gulp.series(scripts, gulp.parallel(styles, watch, html)), watch);
