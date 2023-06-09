const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const copyWebpackPlugin = require("copy-webpack-plugin");
const miniCssextractPlugin = require("mini-css-extract-plugin");
// const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");  // webpack  4 支持 webpack 5 不支持了；
const terserWebpackPlugin = require("terser-webpack-plugin");
const cssMinimazerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  //   entry: "./index.js", // 不写名字默认识 main
  entry: { index: "./src/index.js", login: "./src/login.js" },
  mode: "development",
  output: {
    filename: ".js/[hash:5][name].js",
    clean: true,
    path: resolve(__dirname, "../dist/"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // miniCssextractPlugin.loader 剥离在js中的样式
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
      {
        test: /\.ejs/,
        loader: "ejs-loader",
        options: {
          esModule: false,
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      // new uglifyjsWebpackPlugin({
      // sourceMap: true, //压缩的js 也支持 sourcemap
      // }),
      new terserWebpackPlugin(),
      new cssMinimazerPlugin(),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 30 * 1024, // 300 kb 以上的包就会分割
      name: "common",
      cacheGroups: {
        // 单独对某个包打包
        jquery: {
          // 要打包的包
          name: "jquery", // 打包成的名字 , output 的hash 对这里也有效 。 还有的就是 jquery 这个包的大小也要符合 miniSize 这个选项。
          test: /jquery/, // 是 jauery.js 的文都打包
          chunks: "all",
        },
        "lodash-es": {
          name: "lodash-es",
          test: /lodash-es/,
          chunks: "all",
        },
      },
    },
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
      // 生成css 文件
      filename: "./css/[name].css",
      chunkFilename: "./css/chunck-[name].css",
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, "../src/img"),
          to: resolve(__dirname, "../dist/img"),
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
