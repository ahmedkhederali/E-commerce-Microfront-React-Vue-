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
              marketing:`marketing@${domain}/marketing/latest/remoteEntry.js`,
              auth:`auth@${domain}/auth/latest/remoteEntry.js`,
              dashboard:`dashboard@${domain}/dashboard/latest/remoteEntry.js`,
            },
            shared:PackageJson.dependencies
          })
    ]
}

module.exports=merge(commonConfig, prdConfig)