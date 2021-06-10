const ghPages = require('gh-pages');
const gulp = require("gulp");
// ghPages.publish("build", function(err) {});

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});
