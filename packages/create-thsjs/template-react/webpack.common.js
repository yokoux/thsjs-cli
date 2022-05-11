const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");


module.exports = {
  
  entry: path.resolve(__dirname, "./src/index.jsx"),
  
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "[name].[contenthash:8].js", 
  },
  
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
      utils: path.resolve(__dirname, "src/utils/"),
      components: path.resolve(__dirname, "src/components/"),
      styles: path.resolve(__dirname, "src/styles/"),
    },
    extensions: ['.jsx', '.js', '.json'],
  },
  
  mode: "development",
  
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3|mp4|mov|wav|wma|avi|flv)$/i,
        type: "asset/inline",
        parser: {
          dataUrlCondition: {
            
            maxSize: 10 * 1024, 
          },
        },
        generator: {
          filename: "images/[hash][ext][query]", 
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader", 
        ],
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CleanWebpackPlugin(),
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
    }), 
  ],
};
