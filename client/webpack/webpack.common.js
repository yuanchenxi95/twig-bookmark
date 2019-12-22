const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const rootPath =  path.resolve(path.dirname('./'));
const buildPath = path.resolve(rootPath, './build');
const srcPath = path.resolve(rootPath, './src');
const assetsPath = path.resolve(rootPath, './src/assets');
const entryPath = path.resolve(rootPath, './src/index.tsx');
require('@babel/polyfill');

module.exports = {
  // entry: ['babel-polyfill', entryPath],
  entry: {
    main: ['@babel/polyfill', entryPath],
  },
  output: {
    path: buildPath,
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'file-loader',
          options : {
            limit: 25000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]',
          },
        }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'fonts/[hash]-[name].[ext]',
          },
        }],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  resolve: {
    alias: {
      src: srcPath,
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
        },
      },
      maxSize: 800 * 1024 * 1024, // 800kB
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      root: rootPath,
      verbose: true,
      dry: false,
    }),
    new CopyWebpackPlugin([{ from: assetsPath, to: buildPath }], { ignore: [ '*.html' ]}),
    new HtmlWebpackPlugin({
      template: assetsPath + '/index.html',
    }),
  ],
};
