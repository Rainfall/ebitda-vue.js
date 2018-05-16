var gulp = require("gulp"),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function () {

	browserSync.init({
		open: 'external',
	    host: 'localhost',
	    proxy: 'localhost',
	    port: 81,
	    files: '/exo/src',
	    injectChanges: true
	});

	watch('./src/**/*html', function() {
		browserSync.reload();
	});


	watch('./src/scss/**/*.scss', function() {
	     gulp.start('cssLoad');
	});

	watch('./src/scripts-temp/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});

});

gulp.task('cssLoad', ['scss'], function() {
	browserSync.reload();
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});