/* eslint-disable */

const { dirname } = require("path");
var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: ["webpack-hot-middleware/client", "../pages/_app.js"],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          plugins: ["react-transform"],
          extra: {
            "react-transform": {
              transforms: [
                {W
                  transform: "react-transform-hmr",
                  imports: ["react"],
                  locals: ["module"],
                },
                {
                  transform: "react-transform-catch-errors",
                  imports: ["react", "redbox-react"],
                },
              ],
            },
          },
        },
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.mp4$/,
        loader: "file",
      },
    ],
  },
};
console.log(dirname);
