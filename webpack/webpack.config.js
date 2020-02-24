// プラグインを利用するためにwebpackを読み込んでおく
// const webpack = require('webpack')

// optimization.minimizerを上書きするために必要なプラグイン
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const APP_DIR = path.join(__dirname, 'src')
const BUILD_DIR = path.join(__dirname, 'dist')

module.exports = (env, argv) => {
  // argv.modeにはwebpackを実行したmodeが格納されている
  // 例えば webpack --mode development と実行すれば
  // argv.mode には 'development' が格納されている
  // そのためdevelopmentモードで実行したかどうかを判定できる
  const IS_DEVELOPMENT = argv.mode === 'development'

  return {
    ///
    // エントリーポイントの設定
    ///
    context: APP_DIR,
    entry: {
      main: `${APP_DIR}/js/index.js`
    },
    ///
    /// outputなどの記述は省略
    ///
    output: {
      path: BUILD_DIR,
      filename: 'js/[name].bundle.js'
    },

    // developmentモードで有効になるdevtool: 'eval'を上書き
    // developmentモードでビルドした時だけソースマップを出力する
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            IS_DEVELOPMENT ? 'style-loader' : MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          // enforce: 'pre'を指定することによって
          // enforce: 'pre'がついていないローダーより早く処理が実行される
          // 今回はbabel-loaderで変換する前にコードを検証したいため、指定が必要
          // enforce: 'pre',
          // test: /\.js$/,
          // exclude: /node_modules/,
          // loader: 'eslint-loader'
        }
      ]
    },

    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.coffee',
        '.webpack.js',
        '.web.js',
        '.scss',
        '.woff',
        'woff2',
        '.ttf',
        '.eot',
        '.otf',
        '.png',
        '.svg',
        '.php'
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].bundle.css',
        chunkFilename: 'css/[id].bundle.css'
      }),
      new HtmlWebPackPlugin({
        template: 'index.html',
        inject: true,
        filename: 'index.html'
      })
    ],

    devServer: IS_DEVELOPMENT
      ? {
          contentBase: BUILD_DIR,
          inline: true,
          port: 8000,
          host: '0.0.0.0',
          disableHostCheck: true
        }
      : {},

    // productionモードで有効になるoptimization.minimizerを上書きする
    optimization: {
      // developmentモードでビルドした場合
      // minimizer: [] となるため、consoleは残されたファイルが出力される
      // puroductionモードでビルドした場合
      // minimizer: [ new UglifyJSPlugin({... となるため、consoleは削除したファイルが出力される
      minimizer: IS_DEVELOPMENT
        ? []
        : [
            new UglifyJSPlugin({
              uglifyOptions: {
                compress: {
                  drop_console: true
                }
              }
            })
          ]
    }
  }
}
