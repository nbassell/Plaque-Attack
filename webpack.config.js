module.exports = {
  entry: './src/game.js',
  output: {
    filename: './bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", "*"]
  },
};