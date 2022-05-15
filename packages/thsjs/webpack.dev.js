const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const cwd = process.cwd()

module.exports = smp.wrap(merge(common, {
  entry: path.resolve(cwd, "src/index.tsx"),
  devtool: "eval-cheap-module-source-map",
  cache: {
    type: 'filesystem', 
  },
  devServer: {
    hot: true, 
    open: true, 
    historyApiFallback: true, 
    port: 9000, 
    compress: true, 
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(cwd, "src/index.html"),
    }),
  ],
}));
