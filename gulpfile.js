var gulp = require('gulp')
var karma = require('gulp-karma')

gulp.task('default', function(){
  gulp.src("*.coffee")
  .pipe(karma({
    configFile: 'karma.conf.js',
    action: 'watch'
  }));
})

gulp.task('ci', function(){
  gulp.src("*.coffee")
  .pipe(karma({
    browsers: ["Chrome", "sl_chrome_linux", "sl_ie_6", "sl_ie_9", "sl_android"],
    configFile: 'karma.conf.js',
    action: 'run'
  }));
})
