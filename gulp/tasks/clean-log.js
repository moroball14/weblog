// var config = require("../config.js");
// var gulp = require("gulp");
// var del = require("del");

// gulp.task("clean-log", function(done){
//   return del("./**/*", {cwd: config.path.log});
// });

var config = require("../config.js");
var del = require("del");
var clean;

clean = async function () {
  await del("./**/*", { cwd: config.path.log });
};

module.exports = clean;
