const {merge}=require('webpack-merge');
const commonConfig=require('./webpack.common');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const PackageJson= require('../package.json')

const devConfig={
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
              marketing:'marketing@http://localhost:8082/remoteEntry.js',
              auth:'auth@http://localhost:8083/remoteEntry.js',
            },
            // shared:['react','react-dom']
            shared:PackageJson.dependencies
          }),
      
    ]
}

module.exports=merge(commonConfig, devConfig)