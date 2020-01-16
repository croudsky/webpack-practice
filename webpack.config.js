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
      },
      {
        test: /\.s(a|c)ss$/,
        // loader は、逆順で適用される
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          // 2kb 超える場合は file-loader がファイルとして配信
          limit: 2048,
          name: './images/[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
};
