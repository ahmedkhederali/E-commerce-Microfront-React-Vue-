const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    output:{
        publicPath:'http://localhost:8082/'
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/index.html',
            disableDotRule: true
        }
    },
   
}

module.exports = merge(commonConfig, devConfig)