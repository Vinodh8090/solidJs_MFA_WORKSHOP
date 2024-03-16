const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
   output: {
      publicPath: "auto",
   },

   resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
   },

   devServer: {
      port: 3009,
      historyApiFallback: true,
   },

   module: {
      rules: [
         {
            test: /\.m?js/,
            type: "javascript/auto",
            resolve: {
               fullySpecified: false,
            },
         },
         {
            test: /\.(css|s[ac]ss)$/i,
            use: ["style-loader", "css-loader", "postcss-loader"],
         },
         {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
            },
         },
      ],
   },

   plugins: [
      new ModuleFederationPlugin({
         name: "MFA",
         filename: "remoteEntry.js",
         remotes: {},
         exposes: {
            "./App": "./src/App.jsx",
         },
         shared: {
            ...deps,
            "solid-js": {
               singleton: true,
               requiredVersion: deps["solid-js"],
            },
         },
      }),
      new HtmlWebPackPlugin({
         template: "./src/index.html",
      }),
      new Dotenv(),
   ],
});
