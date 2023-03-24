const { resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //   entry: "./index.js", // 不写名字默认识 main
  entry: { bundle: "./src/index.js" },
  mode: "development",
  output: {
    filename: "./[hash:5][name].js",
    clean: true,
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|svg|jpg|jpeg)$/,
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "home.html",
      template: "./ZBestPC/index.html",
    }),
  ],
};
