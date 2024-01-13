const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const minifyHtml = require("gulp-minify-html");
const browserSync = require("browser-sync").create();

gulp.task("images", function () {
  return gulp
    .src("app/images/*")
    .pipe(newer("dist/img"))
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"))
    .pipe(browserSync.stream());
});

gulp.task("minify-html", function () {
  return gulp
    .src("app/*.html")
    .pipe(minifyHtml())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  gulp.watch("app/images/*", gulp.series("images"));
  gulp.watch("app/*.html", gulp.series("minify-html"));
});

gulp.task("default", gulp.series("images", "minify-html", "watch"));
