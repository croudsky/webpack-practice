const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader は、逆順で適用される
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
};
