const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  //   entry: "./index.js", // 不写名字默认识 main
  entry: { bundle: "./src/index.js" },
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
        use: ["style-loader", "css-loader"],
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
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
