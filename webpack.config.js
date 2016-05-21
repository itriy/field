'use strict'
//var path = require('path');

module.exports = {
    entry: './game',
    output: {
        filename: 'build.js',
        library: 'game'
    },

   // watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: 'source-map',

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015'],
              //plugins: ['transform-runtime']
            }
        }]
        
    }
}