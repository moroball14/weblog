// var config = require("../config.js");
// var gulp = require("gulp");
// var del = require("del");

// gulp.task("copy-javascripts.clean", function(done){
//   return del("./javascripts/**/*", {cwd: config.path.output});
// });

// gulp.task("copy-javascripts", gulp.task("copy-javascripts.clean"), function(done){
//   gulp.src("./javascripts/**/*", { cwd: config.path.input })
//     .pipe(gulp.dest("./javascripts/", { cwd: config.path.output }));
//   done();
// });

var config = require("../config.js");
var { src, dest, series, parallel } = require("gulp");
var del = require("del");
var clean, copy;

clean = async function () {
  await del("./javascripts/**/*", { cwd: config.path.output });
};

copy = function () {
  return src("./javascripts/**/*", { cwd: config.path.input })
    .pipe(dest("./javascripts", { cwd: config.path.output }));
};

module.exports = series(clean, copy);
