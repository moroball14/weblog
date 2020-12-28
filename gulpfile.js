var gulp = require("gulp");

gulp.task("default", function(done){
  console.log(process.env.NODE_ENV);
  done(); // 参考：https://qiita.com/tatsuo-iriyama/items/08ba4bd621b7fdedcc4e
});
