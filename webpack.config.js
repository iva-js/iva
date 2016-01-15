/*
 * Copyright (C) 2016
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var webpack = require("webpack");
var path = require("path");
var uglify = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var lname = "iva";
var outFile;
var plugins = [];

if(env === "build"){
    plugins.push(new uglify({ minimize: true }));
    outFile = lname + ".min.js";
} else {
    outFile = lname + ".js";
}

var config = {
    entry: __dirname + "/src/index.js",
    devtool: "source-map",
    output: {
        path: __dirname + "/build",
        filename: outFile,
        library: "Iva",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
            }
        ]
    },
    externals: {
        "d3": "d3",
        "three.js": "THREE"
    },
    resolve: {
        root: path.resolve("./src"),
        extensions: ["", ".js"]
    },
    plugins: plugins,
    debug: true
};

module.exports = config;
