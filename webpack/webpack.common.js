const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    //new CopyWebpackPlugin({ patterns: [{ from: Path.resolve(__dirname, '../public'), to: 'public' }] }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/pages.html'),
      filename: 'pages.html',
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/cases.html'),
      filename: 'cases.html',
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/case.html'),
      filename: 'case.html',
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/news.html'),
      filename: 'news.html',
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/news-single.html'),
      filename: 'news-single.html',
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/industries.html'),
      filename: 'industries.html',
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/expert-single.html'),
      filename: 'expert-single.html',
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/service.html'),
      filename: 'service.html',
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/fancybox-feedback.html'),
      filename: 'fancybox-feedback.html',
    }),


  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      // {
      //   test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: 'images/[name].[ext]',
      //     },
      //   },
      // },
    ],
  },
};
