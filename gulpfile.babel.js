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
var sass = require("gulp-sass");

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var Server = require("karma").Server;

var rmdir = require("rmdir");

function compile(watch) {
    var bundler = watchify(browserify({ debug: true, entries: ["src/index.js"], standalone: "Iva"})
                         .transform(babel, { sourceMapRelative: path.resolve(__dirname, 'src'), presets: ["es2015"] }));

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
