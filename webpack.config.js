/*
 * Copyright (C) 2016
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var webpack = require("webpack");
var path = require("path");
var uglify = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var lname = "Iva";
var outFile;
var plugins = [];

if(env === "build"){
    plugins.push(new uglify({ minimize: true }));
    outFile = lname + ".js";
} else {
    outFile = lname + ".min.js";
}

var config = {
    entry: __dirname + "/src/index.js",
    devtool: "source-map",
    output: {
        path: __dirname + "/build",
        filename: outFile,
        library: lname,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        root: path.resolve("./src"),
        extensions: ["", ".js"]
    },
    plugins: plugins
};

module.exports = config;
