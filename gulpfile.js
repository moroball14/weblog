// var gulp = require("gulp");
// var requireDir = require("require-dir"); // 参考：https://www.npmjs.com/package/require-dir

// requireDir("./gulp/tasks", { recurse: true });

// gulp.task("default", function(done){
//   console.log(process.env.NODE_ENV);
//   done(); // 参考：https://qiita.com/tatsuo-iriyama/items/08ba4bd621b7fdedcc4e
// });

var config = require("./gulp/config.js");
var { series, parallel } = require("gulp");
var requireDir = require("require-dir");
var tasks, development, production;

tasks = requireDir("./gulp/tasks", { recurse: true });

development = series(
  tasks["clean-log"],
  tasks["copy-third_party"],
  tasks["copy-images"],
  tasks["copy-javascripts"]
  // tasks["compile-sass"]
);

production = series(
  tasks["clean-log"],
  tasks["copy-third_party"],
  tasks["copy-images"],
  tasks["minify-javascripts"]
  // tasks["compile-sass"]
);

module.exports = {
  "copy-images": series(tasks["copy-images"]),
  development,
  production,
  default: config.env.IS_DEVELOPMENT ? development : production
};
