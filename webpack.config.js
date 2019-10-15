const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const indextInput = './src/pug/index.pug';
const indexOutput = './index.html';

const webpackInitConfig = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCSSExtractPlugin.loader,
					'css-loader',
					'sass-loader'
        ]
			}
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: indexOutput,
      template: indextInput,
    }),
    new MiniCSSExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: '[id].css'
    }),
	],
};

module.exports = webpackInitConfig;
