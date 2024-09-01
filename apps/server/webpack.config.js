const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");


const serverConfiguration = {
  entry: './src/index.ts',
  externalsPresets: { node: true },
  devtool: "cheap-module-source-map",
  externals: [
    nodeExternals(),
    nodeExternals({
      modulesDir: path.resolve(__dirname, '../../node_modules'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                ('@react-native/babel-preset'),
                {
                  useTransformReactJSXExperimental: true,
                  withDevTools: false,
                },
              ],
              '@babel/preset-react'
            ],
            plugins: [require('./build/babel/rsc-client-proxy-babel-plugin')]
          },
        },
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    alias: {
      // '@rsc/api-client-omdb': path.resolve(__dirname, '../../packages/api-client-omdb/src/index.server.ts')
      '@rsc/design-system': path.resolve(__dirname, '../../node_modules/@rsc/design-system'),
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,  // Enable Webpack's watch mode to rebuild on changes
  mode: 'development',
  watchOptions: {
    stdin: true,
  },
  plugins: [
    new NodemonPlugin({
      nodeArgs: ['--conditions=react-server', '--preserve-symlinks'],
    })
  ]
};

const clientConfiguration = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: [path.resolve(__dirname, "./src/pages/index.js")],
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: '[name].[contenthash].js',
  },
  externals: {
    "react": "React",
    "react-native": "ReactNative"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                ('@react-native/babel-preset'),
                {
                  useTransformReactJSXExperimental: true,
                  withDevTools: false,
                },
              ],
              '@babel/preset-react'
            ],
          },
        },
      },
    ]
  },
  plugins: [new ReactServerWebpackPlugin({
    isServer: false,
    clientReferences: [
      {
        directory: './src/pages/',
        recursive: true,
        include: /\.(js|ts|jsx|tsx)$/,
      },
      {
        directory: './src/components/',
        recursive: true,
        include: /\.(js|ts|jsx|tsx)$/,
      }
    ]
  })],
  optimization: {
    runtimeChunk: 'single',
  },
  watch: true,  // Enable Webpack's watch mode to rebuild on changes
  watchOptions: {
    stdin: true,
  },
}

module.exports = [serverConfiguration, clientConfiguration];

