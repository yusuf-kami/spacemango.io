const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`,
        PORT: `process.env.PORT`
      }
    })
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoader: 1,
              modules: true,
              localIdentName: '[name]_[local]__[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: [/src/],
        use: [{
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(ttf|eot|otf|svg|png)$/,
        use: [
          'file-loader?name=[name].[ext]'
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  }
};