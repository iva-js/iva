/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

"use strict";

let path = require("path");

let gulp = require('gulp');
let eslint = require("gulp-eslint");
let sass = require("gulp-sass");

let jade = require("gulp-jade");

let Server = require("karma").Server;

let rmdir = require("rmdir");

gulp.task("lint", ()=>{
    return gulp.src(["src/**/*.js"])
        .pipe(eslint({ 
            env: {
                es6: true
            },
            ecmaFeatures: {
                modules: true
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("lint:watch", ()=>{
   gulp.watch("./src/**/*.js", ["lint"]);
});

gulp.task('test-integration', (done) => {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task("sass-default", () => {
    gulp.src("./styles/default/scss/main.scss")
       .pipe(sass.sync().on("error", sass.logError))
       .pipe(gulp.dest("./styles/default/css"));
});

gulp.task("sass-default:watch", () => {
    gulp.watch("./styles/default/scss/*.scss", ["sass-default"]);
});

gulp.task("examples", ()=>{
    gulp.src("examples/jade/**/*.jade")
        .pipe(jade())
        .pipe(gulp.dest("examples/html"));

    gulp.src("examples/jade/**/*.js")
        .pipe(gulp.dest("examples/html"));

});

gulp.task("examples:watch", ()=>{
    gulp.watch("./examples/jade/**/*", ["examples"]);
});

gulp.task("watch:all", ["examples:watch", "sass-default:watch", "lint:watch"],()=>{});
