const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { plugins } = require('./plugins');

const resolvePath = (...args) => path.resolve(__dirname, ...args);

module.exports = (_, { mode }) => ({
  entry: './src/application.tsx',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: resolvePath('../public/', 'dist/')
  },
  devtool: 'source-map',
  plugins,
  resolve: {
    extensions: ['.ts', '.tsx', '.d.ts']
  },
  module: {
    rules: [
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
          tsconfigRaw: require('../tsconfig.json')
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }/*,
          {
            loader: 'sass-loader'
          }*/
        ]
      },
      {
        test: /\.?styled\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: '@linaria/webpack5-loader'
          }
        ]
      }
    ]
  }
});
