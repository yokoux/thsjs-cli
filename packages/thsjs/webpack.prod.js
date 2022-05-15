const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin"); 
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); 
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
  const cwd = process.cwd()


module.exports = merge(common, {
  entry: path.resolve(cwd, "./src/index.tsx"),
  output: {
    path: path.resolve(cwd, "dist"),
    filename: "[name].[chunkhash:8].js",
    clean: true, 
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,        
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'postcss-loader',
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(), 
    new MiniCssExtractPlugin({      
      filename: "[name].[chunkhash:8].css",
    }),
    new PurgeCSSPlugin({ 
      paths: glob.sync(`${path.resolve(cwd, "src")}`, {
        nodir: true,
      }),
    }),
  ],
  optimization: {
    runtimeChunk: true,
    
    minimizer: [
      new TerserPlugin({
        parallel: 4, 
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        parallel: 4,
      }),
    ],
  },
});
