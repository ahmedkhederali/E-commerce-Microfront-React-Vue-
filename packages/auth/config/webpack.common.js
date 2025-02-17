const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const PackageJson= require('../package.json')
module.exports ={
    module:{
        rules:[
            // transform all of code from ES2015 , 16,17,18,19,20 to regular es5 code which executed in browser 
            {
              test:/\.m?js$/,
              exclude:/node_modules/,
              use:{
                loader:'babel-loader',
                options:{
                    // @babel/preset-react ===> used for transform JSX in reactjs 
                    // @babel/preset-env ==> transform all code to normal ES5 js which browser understand
                    // @babel/plugin-transform-runtime ==> to support async awain in browser
                    presets:['@babel/preset-react','@babel/preset-env'],
                    plugins:['@babel/plugin-transform-runtime']
                }
              }
            }
        ]
    },
    plugins: [
      new ModuleFederationPlugin({
          name: "auth",
          filename: "remoteEntry.js",
          exposes: {
              "./AuthApp": "./src/bootstarp.js",
          },
          // shared:['react','react-dom']
          shared:PackageJson.dependencies
      }),
      new HtmlWebpackPlugin({
          template: './public/index.html'
      })
  ]
}