/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

"use strict";

let path = require("path");

let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');
let browserify = require('browserify');
let watchify = require('watchify');
let babel = require('babelify');
let eslint = require("gulp-eslint");
let sass = require("gulp-sass");

let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');

let jade = require("gulp-jade");

let Server = require("karma").Server;

let rmdir = require("rmdir");

function compile(watch) {
    let bundler = watchify(browserify({ debug: true, entries: ["src/index.js"], standalone: "Iva"})
                         .transform(babel, { 
                             sourceMapRelative: path.resolve(__dirname, 'src'), 
                             presets: ["es2015"],
                             ignore: /d3/ig
                         }));

    function rebundle() {
        lint();

        rmdir("./build", (err, dirs, files) => {
            console.log('-> bundling at ' + new Date());

            bundler.bundle()
                .on('error', (err) => { console.error(err); this.emit('end'); })
                .pipe(source('build.js'))
                .pipe(buffer())
                .pipe(sourcemaps.init({ loadMaps: true }))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('./build'));

        });
   }

    if (watch) {
        bundler.on('update', function() {
            rebundle();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
};

function lint(){
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
}

gulp.task('js', () => { return compile(); });
gulp.task('js:watch', () =>  { return watch(); });

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
        .pipe(gulp.dest("examples/html"));

    gulp.src("examples/jade/**/*.js")
        .pipe(gulp.dest("examples/html"));

    gulp.src("examples/html/**/*.jade")
        .pipe(jade())
        .pipe(gulp.dest("examples/html"));
});

gulp.task("examples:watch", ()=>{
    gulp.watch("./examples/jade/**/*", ["examples"]);
});

gulp.task("watch:all", ["examples:watch", "sass-default:watch", "js:watch"],()=>{});
