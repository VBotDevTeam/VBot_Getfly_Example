/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');
const path = require('path');
const MillionLint = require('@million/lint');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  entry: {
    root: './src/index.js',
    // app: './src/indexV1.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    module: true, // Bật hỗ trợ EcmaScript Module     
  },
  experiments: {
    outputModule: true, // Cho phép Webpack tạo file ESM
    topLevelAwait: true, // Cho phép sử dụng dynamic import() ở cấp cao nhất   
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.(sa|sc|c)ss$/,       
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpe?g|gif|png|PNG|ico|ogg|svg)$/,
        type: 'asset/resource',
        generator: { filename: '[name][ext]?path=[file]&hash=[hash:10][ext][query]' },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Bật hot load mudule trên webpack
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
      inject: 'body', // Thêm file js vào thẻ body của trang
      chunks: ['root'],
      scriptLoading: 'module', // Load file js với type ="module"   
    }),
    
    // MillionLint.webpack(),

    // new HtmlWebpackPlugin({
    // 	template: './index.html',
    // 	filename: './v1/index.html',
    // 	chunks: ["app"],
    // }),
  ],
  optimization: {
    minimizer: [],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'async', // Chia nhỏ mã chỉ cho các chunk được tải động (tức là khi sử dụng dynamic import())
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
    // open: true,
    compress: true,
    hot: true,
    port: 6789,
    // host: 'test.getflycrm.com',
    // host: '192.168.1.92', // Địa chỉ IP trong mạng LAN của bạn
    // allowedHosts: 'all', // Chấp nhận tất cả các host trong mạng LAN
    server: {
      type: 'http',
      // type: 'https',
      options: {
        // key: fs.readFileSync('./ssl/a.key'),
        // cert: fs.readFileSync('./ssl/a.crt'),
      },
    },
    client: { overlay: false },
  },
  cache: {
    type: 'filesystem',
    compression: 'gzip',
    idleTimeout: 86400000,
    buildDependencies: {
      config: [__filename],
    },
  },
  stats: {
    all: false,
    preset: 'errors-warnings',
    builtAt: true,
    colors: true,
    timings: true,
    errors: true,
    performance: true,
  },
});
