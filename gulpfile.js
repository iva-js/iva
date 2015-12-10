/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var path = require("path");

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var eslint = require("gulp-eslint");

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

function compile(watch) {
    var bundler = watchify(browserify({ debug: true, entries: ["src/index.js"]})
                         .transform(babel, { sourceMapRelative: path.resolve(__dirname, 'src'), presets: ["es2015"] }));

    function rebundle() {
        lint();

        bundler.bundle()
            .on('error', function(err) { console.error(err); this.emit('end'); })
            .pipe(source('build.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./build'));
   }

    if (watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
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

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

