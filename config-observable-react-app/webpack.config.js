const path = require("path");
const webpack = require("webpack");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  entry: path.resolve(__dirname, "static/rdb/js/src/cadre_v2.index.js"),
  mode: "development",

  output: {
    filename: "cadre_v2.bundle.js",
    path: path.resolve(__dirname, "static/rdb/js/dist")
  },
  plugins: [new BundleTracker({ filename: "./webpack-stats.json" })],
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      {
        test: /\.js$/,
        loader: require.resolve("@open-wc/webpack-import-meta-loader")
      },
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, "static/rdb/js/src")],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
