var gulp = require('gulp');
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('scss', function () {
  return gulp.src('./src/scss/**/[^_]*.?(s)css')
    .pipe(scss({
        includePaths: ['node_modules/slick-carousel/slick']
    }).on('error', scss.logError))
    .pipe(autoprefixer({
    	flexbox: true,
    	grid: true,
    	browsers: ['> 1%', 'last 5 years', 'Firefox > 20']
    }))
    .pipe(gulp.dest('./src/styles'));
});
