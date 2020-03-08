const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    // entry 為使用 webpack 時的進入點，從進入點開始將所有 module 給串起來
    // entry 屬性官方說明 https://webpack.js.org/concepts/#entry
    entry: './src/index.js',
    // output 為執行 webpack 進行打包後『最後產出檔案』的位置及名稱
    // output 屬性官方說明 https://webpack.js.org/concepts/#output
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    // module 設定許多不同的 loader 來對不同的檔案類型進行編譯，像 JS，SCSS，TypeScript
    // module 屬性官方說明 https://webpack.js.org/concepts/#loaders
    module: {
      rules: [
        // 這是一個 babel-loader 的設定
        // https://github.com/babel/babel-loader
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    // plugins 用來放編譯時會進行特殊處理的外掛
    // plugins 屬性官方說明 https://webpack.js.org/concepts/#plugins
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
    ],
    // 優化設定，這邊我關掉了對『最後產出檔案』不要進行壓縮混淆
    // optimization 屬性官方說明 https://webpack.js.org/configuration/optimization/
    optimization: {
      minimize: false
    },
    // 對 webpack-dev-server 啟動的設定，webpack-dev-server 為測試時使用，可以進行 debugger
    // 就類似 IIS Express 用 Visual Studio 啟動時
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      open: true,
    },
  },
];
