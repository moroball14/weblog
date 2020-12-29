// var config = require("../config.js");
// var gulp = require("gulp");
// var del = require("del");

// gulp.task("copy-images.clean", function(done){
//   return del("./images/**/*", {cwd: config.path.output});
// });

// gulp.task("copy-images", gulp.task("copy-images.clean"), function(done){
//   gulp.src("./images/**/*", { cwd: config.path.input })
//     .pipe(gulp.dest("./images/", { cwd: config.path.output }));
//   done();
// });

var config = require("../config.js");
var { src, dest, series, parallel } = require("gulp");
var del = require("del");
var clean, copy;

clean = async function () {
  await del("./images/**/*", { cwd: config.path.output });
};

copy = function () {
  return src("./images/**/*", { cwd: config.path.input })
    .pipe(dest("./images", { cwd: config.path.output }));
};

module.exports = series(clean, copy);