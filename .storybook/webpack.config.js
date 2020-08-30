const path = require('path');

const sourceFolders = [path.resolve(__dirname, '../src')];

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: sourceFolders,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'not_exist_path'),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000',
      },
    ],
  },
  resolve: {
    alias: {},
  },
};
