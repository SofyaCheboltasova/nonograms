const path = require("path");
const webpack = require("webpack");

const { HtmlWebpackPlugin } = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        use: { loader: "url-loader" },
      },
      { test: /\.svg$/, exclude: /node_modules/, loader: "svg-inline-loader" },
      { test: /\.(woff|woff2)$/, use: { loader: "url-loader" } },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  devServer: {
    static: path.resolve(__dirname, "./dist"),
  },
};

