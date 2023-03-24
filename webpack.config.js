const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const copyWebpackPlugin = require("copy-webpack-plugin");
const miniCssextractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //   entry: "./index.js", // 不写名字默认识 main
  entry: { index: "./src/index.js", login: "./src/login.js" },
  mode: "development",
  output: {
    filename: ".js/[hash:5][name].js",
    clean: true,
    path: resolve(__dirname, "dist/"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssextractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|gif|svg|jpg|jpeg)$/i,
        type: "asset", // 表示采用 webpack 5 中内置的 asset 特性
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 小于 8 kb 的就转base64
          },
        },
        generator: {
          filename: "image/[hash:6][name][ext]",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: resolve(__dirname, "dist"),
    },
    compress: true,
    port: "8000",
    hot: true,
  },
  plugins: [
    new miniCssextractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "./css/chunck-[name].css",
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, "src/img"),
          to: resolve(__dirname, "dist/img"),
        },
      ],
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["index"],
    }),
    new htmlWebpackPlugin({
      filename: "login.html",
      template: "./src/login.html",
      chunks: ["login"],
    }),
  ],
};
