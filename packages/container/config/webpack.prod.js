const {merge}=require('webpack-merge');
const commonConfig=require('./webpack.common');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const PackageJson= require('../package.json')

const domain=process.env.PRODUCTION_DOMAIN
const prdConfig={
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
        publicPath:'/container/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
              marketing:`marketing@/${domain}/marketing/remoteEntry.js`,
            },
            shared:PackageJson.dependencies
          })
    ]
}

module.exports=merge(commonConfig, prdConfig)