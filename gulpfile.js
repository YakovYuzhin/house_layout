// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask

var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function (cb) {
  gulp
    .src("src/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(
      gulp.dest(function (f) {
        return f.base;
      })
    );
  cb();
});

gulp.task(
  "default",
  gulp.series("sass", function (cb) {
    gulp.watch("src/*.scss", gulp.series("sass"));
    cb();
  })
);
