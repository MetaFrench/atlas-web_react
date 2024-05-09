const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'] 
      },
      { 
        test: /\.jpg/,
        use: ['file-loader', 'image-webpack-loader'] 
      },
    ]
  },
};