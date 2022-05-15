const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js'
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
      utils: path.resolve(__dirname, "src/utils/"),
      components: path.resolve(__dirname, "src/components/"),
      styles: path.resolve(__dirname, "src/styles/"),
    },
  },

}
