'use strict';

const gulp = require('gulp');

const browserSync = require('browser-sync').create();

const path = require('path');
const del = require('del');

const postcss = require('gulp-postcss');
// const lessImport = require('gulp-less-import');
const less = require('gulp-less');
const sass = require('gulp-sass');
const autoprefixer = require("gulp-autoprefixer");

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const pug = require('gulp-pug');
const gcmq = require('gulp-group-css-media-queries');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const inlineSVG = require('postcss-inline-svg');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');

const rename = require('gulp-rename');
const notify = require('gulp-notify');
const debug = require('gulp-debug');
// const clean = require('gulp-clean');
const  cssnano = require('gulp-cssnano');

var PATH = {
	SRC: {
        PUG: 'src/pug/*.pug',
        SASS: 'src/sass/style.scss',
        JS: [
					'src/blocks/**/*.js',
					'src/scripts/main.js'
        ],
        IMG: [
          '!src/images/icons/',
          'src/images/**/*.{jpg,jpeg,gif,png,svg}'
        ],
        SVG: [
          'src/images/svg/**/*.svg'
        ],
        FONTS: 'src/fonts/**'
	},
	BUILD: {
        HTML: 'build/',
        CSS: 'build/css/',
        JS: 'build/js/',
        IMG: 'build/img/',
        SVG: 'build/img/svg',
        FONTS: 'build/fonts/'
	},
  LIBS: {
    CSS: [
        'src/sass/libs/**'
    ],
    JS: [
			  'src/scripts/jquery-3.3.1.min.js',
        'src/scripts/libs/lazySizes.min.js',
        'src/scripts/libs/**'
    ]
  },
  WATCH: {
    PUG: ['src/pug/**/*.pug', 'src/blocks/**/*.pug'],
    SASS: ['src/sass/libs/*.scss', 'src/sass/settings/*.scss', 'src/sass/*.scss', 'src/blocks/**/*.scss'],
    JS: ['src/scripts/main.js', 'src/blocks/**/*.js'],
    SVG: ['src/images/svg/**/*.svg']
  }
};

/*--------------------------------------------------------------
# CSS
--------------------------------------------------------------*/

gulp.task('css:libs', function () {
  console.log('---------- Копирование внешних стилей');
    return gulp.src(PATH.LIBS.CSS)
        // .pipe(concat('libs.css'))
        .pipe(gulp.dest(PATH.BUILD.CSS + 'libs/'))
        .pipe(browserSync.stream());
});
gulp.task('sass', function () {
  console.log('---------- Обработка Less');
    return gulp.src(PATH.SRC.SASS)
        .pipe(sass()).on('error', notify.onError(function(err){
            return {
                title: 'SASS',
                message: err.message
            };
        }))
        .pipe(postcss([
          require('postcss-flexbugs-fixes'),
          require('postcss-inline-svg')
        ]))
			  .pipe(gcmq())
        .pipe(autoprefixer({browsers: ['last 10 versions']}))
        .pipe(debug({title: 'обработано less файлов'}))
        .pipe(gulp.dest(PATH.BUILD.CSS))
        .pipe(browserSync.stream());
});



/*--------------------------------------------------------------
# HTML
--------------------------------------------------------------*/
gulp.task('pug', function () {
  console.log('---------- Обработка Pug');
    return gulp.src(PATH.SRC.PUG)
        .pipe(pug({pretty: true}))
        .on('error', notify.onError(function(err){
            return {
                title: 'PUG',
                message: err.message
            };
        }))
        .pipe(gulp.dest(PATH.BUILD.HTML))
        .pipe(browserSync.stream({once: true}));
});


/*--------------------------------------------------------------
# JS
--------------------------------------------------------------*/

gulp.task('js:libs', function () {
    console.log('---------- Обработка внешних JS файлов');
    return gulp.src(PATH.LIBS.JS)
      .pipe(gulp.dest(PATH.BUILD.JS + 'libs/'))
      .pipe(browserSync.stream());
});
gulp.task('jsLibs', function () {
	console.log('---------- Обработка JS проекта');
	return gulp.src(PATH.LIBS.JS)
		.pipe(concat('libs.js'))
		.pipe(gulp.dest(PATH.BUILD.JS))
		.pipe(browserSync.stream());
});
gulp.task('js', function () {
    console.log('---------- Обработка JS проекта');
    return gulp.src(PATH.SRC.JS)
      .pipe(concat('main.js'))
      .pipe(gulp.dest(PATH.BUILD.JS))
      .pipe(browserSync.stream());
});


/*--------------------------------------------------------------
# JS
--------------------------------------------------------------*/
gulp.task('fonts', function () {
    console.log('---------- Копирование шрифтов');
    return gulp.src(PATH.SRC.FONTS)
      .pipe(gulp.dest(PATH.BUILD.FONTS));
});


/*--------------------------------------------------------------
# Оптимизация и копирование изображений
--------------------------------------------------------------*/
gulp.task('img', function () {
    console.log('---------- Оптимизация картинок');
    return gulp.src(PATH.SRC.IMG)
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      })).on('error', notify.onError(function(err){
            return {
                title: 'IMG',
                message: err.message
            };
      }))
      .pipe(gulp.dest(PATH.BUILD.IMG));
});

gulp.task('sprite:svg', function () {

      console.log('---------- Сборка SVG спрайта');
      return gulp.src(PATH.SRC.SVG)
        .pipe(svgstore())
        .pipe(rename('sprite-svg.svg'))
        .pipe(gulp.dest(PATH.BUILD.SVG));
});

/*--------------------------------------------------------------
# Remove folder build before starting build
--------------------------------------------------------------*/
gulp.task('clean', function() {
  console.log('---------- Очистка папки build');
  return del('build/');
});


/*--------------------------------------------------------------
# All task
--------------------------------------------------------------*/
gulp.task('build', gulp.series('clean',
  gulp.parallel('pug', 'sass', 'jsLibs','js:libs', 'js', 'img', 'sprite:svg', 'fonts'))
);


/*--------------------------------------------------------------
# Tracking changes files
--------------------------------------------------------------*/
gulp.task('serve', function () {
  browserSync.init({
    server: "build/"
  });

  gulp.watch(PATH.WATCH.PUG, gulp.series('pug'));
  gulp.watch(PATH.WATCH.SASS, gulp.series('sass'));
  gulp.watch(PATH.WATCH.JS, gulp.series('js'));
  gulp.watch(PATH.WATCH.SVG, gulp.series('sprite:svg'));
});

/*--------------------------------------------------------------
# Start building and watching files
--------------------------------------------------------------*/
gulp.task('default',
  gulp.series('build', gulp.parallel('serve'))
);


