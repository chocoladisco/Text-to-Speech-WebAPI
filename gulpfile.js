var gulp = require('gulp');
var gutil = require('gulp-util');

var coffee = require('gulp-coffee');

var uglify = require('gulp-uglify');


gulp.task('default', function(){

	//converting coffeescript to javascript
	gulp.src('./src/*.coffee')
		.pipe(coffee({
			bare: true
		}).on('error', gutil.log))
		//.pipe(uglify())
		.pipe(gulp.dest('./dist/'));
});
