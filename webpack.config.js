const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        // babel js
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // images assets
        test: /\.(jpeg|jpg|pic|gif|svg|webp)$/i,
        type: 'asset/resource'
      },
      {
        // css loader
        test: /\.css$/i,
        use:['style-loader', 'css-loader']
      },
      {
        // fonts assets
        test: /\.(woff|woof2|eot|ttf|otf)/i,
        type: 'asset/resource'
      }
    ]
  }
}