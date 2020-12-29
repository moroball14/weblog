// var config = require("../config.js");
// var gulp = require("gulp");
// var del = require("del");

// gulp.task("copy-third_party.clean", function(done){
//   return del("./third_party/**/*", {cwd: config.path.output});
// });

// // jquery, popper.js, bootstrap, font-awesome
// gulp.task("copy-third_party.jquery", gulp.task("copy-third_party.clean"), function(done){
//   gulp.src("./jquery/dist/**/*", { cwd: config.path.node_modules })
//     .pipe(gulp.dest("./third_party/jquery", { cwd: config.path.output }));
//   done();
// });

// gulp.task("copy-third_party.popper.js", gulp.task("copy-third_party.clean"), function(done){
//   gulp.src("./popper.js/dist/**/*", { cwd: config.path.node_modules })
//     .pipe(gulp.dest("./third_party/popper.js", { cwd: config.path.output }));
//   done();
// });

// gulp.task("copy-third_party.bootstrap", gulp.task("copy-third_party.clean"), function(done){
//   gulp.src("./bootstrap/dist/**/*", { cwd: config.path.node_modules })
//     .pipe(gulp.dest("./third_party/bootstrap", { cwd: config.path.output }));
//   done();
// });

// gulp.task("copy-third_party.font-awesome", gulp.task("copy-third_party.clean"), function(done){
//   gulp.src("./font-awesome/**/*", { cwd: config.path.node_modules })
//     .pipe(gulp.dest("./third_party/font-awesome", { cwd: config.path.output }));
//   done();
// });

// gulp.task("copy-third_party", gulp.series(gulp.parallel(
//   "copy-third_party.jquery",
//   "copy-third_party.popper.js",
//   "copy-third_party.bootstrap",
//   "copy-third_party.font-awesome"
// )));

var config = require("../config.js");
var { src, dest, series, parallel } = require("gulp");
var del = require("del");

var clean = async function () {
  await del("./third_party/**/*", { cwd: config.path.output });
};

var jquery = function () {
  return src("./jquery/dist/**/*", { cwd: config.path.node_modules })
    .pipe(dest("./third_party/jquery", { cwd: config.path.output }));
};

var popper = function () {
  return src("./popper.js/dist/**/*", { cwd: config.path.node_modules })
    .pipe(dest("./third_party/popper.js", { cwd: config.path.output }));
};

var bootstrap = function () {
  return src("./bootstrap/dist/**/*", { cwd: config.path.node_modules })
    .pipe(dest("./third_party/bootstrap", { cwd: config.path.output }));
};

var fontAwesome = function () {
  return src("./font-awesome/**/*", { cwd: config.path.node_modules })
    .pipe(dest("./third_party/font-awesome", { cwd: config.path.output }));
};

module.exports = series(
  clean,
  parallel(jquery, popper, bootstrap, fontAwesome)
);
