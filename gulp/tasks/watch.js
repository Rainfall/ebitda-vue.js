var gulp = require("gulp"),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function () {

	browserSync.init({
        server: {
            baseDir: "./",
            directory: true
        },
	    injectChanges: true
	});

	watch('./**/*html', function() {
		browserSync.reload();
	});


	watch('./scss/**/*.scss', function() {
	     gulp.start('cssLoad');
	});

	// watch('./src/scripts-temp/**/*.js', function() {
	// 	gulp.start('scriptsRefresh');
	// });

});

gulp.task('cssLoad', ['scss'], function() {
	browserSync.reload();
});

// gulp.task('scriptsRefresh', ['scripts'], function() {
// 	browserSync.reload();
// });