const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: outputPath,
    filename: 'main.js'
  },
  module: {
    rules: [
      // babel rule
      {
        // 正規表現　x?はxの存在有無
        test: /\.jsx?$/,
        // 除外設定
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // css, sass rule
      {
        test: /\.(s(a|c)|c)ss$/,
        // loader は、逆順で適用される
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // image rule
      {
        // 正規表現　e?はeの存在有無、最後のiは大文字許容
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          // 2kb を超える場合は file-loader がファイルとして配信
          limit: 2048,
          name: './images/[name].[ext]'
        }
      },
      // html loader
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  },
  plugins: [
      new HtmlWebpackPlugin({
        // ひな形のHTML配置
        template: './src/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
      })
  ],
  // 最適化
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        ie8: true,
        compress: {
          // consoleを削除
          drop_console: true
        }
      }
    })]
  }
};
