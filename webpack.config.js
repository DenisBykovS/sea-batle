const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  }
  if (isProd) {
    config.minimizer = [
      new OptimizeCssWebpackPlugin(),
      new TerserWebpackPlugin(),
    ]
  }
  return config
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.png', '.jpg', '.css'],
    alias: {
      '@ship': path.resolve(__dirname, 'src/ship'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4000,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)/,
        use: ['file-loader'],
      },
      {
        test: /\.(png|jpg|gif)/,
        use: ['file-loader'],
      },
    ],
  },
}
