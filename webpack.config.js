const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

// plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(stories|story)\.mdx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-transform-react-jsx'],
            },
          },
          {
            loader: '@mdx-js/loader',
            options: {
              compilers: [createCompiler({})],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      react: path.resolve(__dirname, './node_modules/react'),
      'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
      'styled-components': path.resolve(
        __dirname,
        './node_modules/styled-components',
      ),
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      umd: 'react',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      umd: 'prop-types',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      umd: 'styled-components',
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
