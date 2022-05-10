const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(merge(common, {
  mode: 'development',
  entry: path.resolve(__dirname, "src"),
  devtool: "eval-cheap-module-source-map",
  cache: {
    type: 'filesystem', 
  },
  devServer: {
    hot: true, 
    open: false, 
    historyApiFallback: true, 
    port: 9000, 
    compress: true, 
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
}));
