const merge = require('webpack-merge')
const mainConfig = require('./webpack.config')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin') // 打包前清理产出目录

function currFile() {
  let index = __dirname.lastIndexOf('\\')
  return __dirname.slice(index + 1)
}
let folderName = currFile()

module.exports = merge(mainConfig, {
  devtool: false,
  plugins: [
    new UglifyWebpackPlugin(), // 压缩js
    new CleanWebpackPlugin([folderName], {
      root: path.resolve(__dirname, '../../')
    }), // 每次打包会先清空dist目录
  ]
})
