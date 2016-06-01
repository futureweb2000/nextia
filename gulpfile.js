var gulp = require('gulp');
var	connect = require('gulp-connect');
var historyApiFalback = require('connect-history-api-fallback');
var stylus = require('gulp-stylus');
var nib = require('nib');


//Servidor de desarrollo

gulp.task('server', function(){

	connect.server({
		root: './app',
		hostname: '0.0.0.0',
		port: 8080,
		livereload: true
		// middleware: function(connect, opt){
		// 	return[historyApiFalback]
		// }

	})
});




// Preprocesa el CSS y recarga cuando hay cambios

gulp.task('css', function(){
	gulp.src('./app/stylesheets/main.styl')
		.pipe(stylus({use:nib()}))
		.pipe(gulp.dest('./app/stylesheets'))
		.pipe(connect.reload());
});


//Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function(){
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});


//vigila los cambios y lanza las tareas relacionadas

gulp.task('watch', function(){
	gulp.watch(['./app/**/*.html'], ['html']);
	gulp.watch(['./app/stylesheets/**/*.styl'], ['css']);
})



gulp.task('default', ['server', 'watch']);







