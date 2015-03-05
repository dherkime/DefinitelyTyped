/// <reference path="./gulp-concat.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp = require("gulp");
import concat = require("gulp-concat");

gulp.task("concat:simple", () => {
    gulp.src(["file*.txt"])
        .pipe(concat("file.txt"))
        .pipe(gulp.dest("build"));
});

gulp.task("concat:newLine", () => {
    gulp.src(["file*.txt"])
        .pipe(concat("file.txt", { newLine: ";" }))
        .pipe(gulp.dest("build"));
});

gulp.task("concat:vinyl", () => {
    gulp.src(["file*.txt"])
        .pipe(concat({ path: "file.txt", stat: { mode: 0666 } }))
        .pipe(gulp.dest("build"));
});