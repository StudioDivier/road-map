const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')
// const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require('browser-sync').create()

// function libs() {
//   return src('src/libs/**')
//     .pipe(dest('public/libs'))
// }

function html() {
    return src('src/**.html')
        .pipe(include({
            prefix: '@@'
        }))
        .pipe(htmlmin({
            collapseWhitespace: false,
            removeComments: true
        }))
        .pipe(dest('public'))
}

function scss_main() {
    return src('src/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last  2 versions']
        }))
        .pipe(concat('main.css'))
        .pipe(dest('public/css'))
}

function scss_header() {
    return src('src/scss/header.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last  2 versions']
        }))
        .pipe(concat('header.css'))
        .pipe(dest('public/css'))
}

function scss_footer() {
    return src('src/scss/footer.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last  2 versions']
        }))
        .pipe(concat('footer.css'))
        .pipe(dest('public/css'))
}

function scss_index() {
    return src('src/scss/pages/index/index.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last  2 versions']
        }))
        .pipe(concat('index.css'))
        .pipe(dest('public/css'))
}

function scss_folders() {
    return src('src/scss/pages/**')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last  2 versions']
        }))
        .pipe(dest('public/css/pages'))
}

function img() {
    return src('src/img/**')
        .pipe(dest('public/img'))
}

function js() {
    return src('src/js/**')
        .pipe(dest('public/js'))
}

function clear() {
    return del('public')
}

function serve() {
    sync.init({
        server: './public'
    })

    watch('src/**.html', series(html)).on('change', sync.reload)
    watch('src/parts/**.html', series(html)).on('change', sync.reload)
    watch('src/img/**', series(img)).on('change', sync.reload)
    watch('src/js/**', series(js)).on('change', sync.reload)
    watch('src/scss/pages/index/components/**.scss', series(scss_main, scss_folders, scss_header, scss_footer, scss_index)).on('change', sync.reload)
    watch('src/scss/**', series(scss_main, scss_folders, scss_header, scss_footer, scss_index)).on('change', sync.reload)
}

exports.build = series(
    clear,
    scss_main,
    scss_header,
    scss_footer,
    scss_index,
    scss_folders,
    html,
    img,
    js
)

exports.serve = series(
    clear,
    scss_main,
    scss_header,
    scss_footer,
    scss_index,
    scss_folders,
    html,
    img,
    js,
    serve)

exports.clear = clear

// exports.libs = libs