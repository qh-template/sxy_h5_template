const merge = require('webpack-merge')
const mainConfig = require('./webpack.config')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin') // 打包前清理产出目录
const QiniuPlugin = require('qiniu-webpack-plugin')
function currFile() {
  let index = __dirname.lastIndexOf('\\')
  return __dirname.slice(index + 1)
}
let folderName = currFile()

module.exports = merge(mainConfig, {
  devtool: false,
  plugins: [
    new QiniuPlugin({
      ACCESS_KEY: 'WBfKghE0TNykijwnAutbyS1eZkSzjdH0zh9MkQGz',
      SECRET_KEY: '0uUZJ0drePZxcoEYuGKW3QGAbuVOKbBWfLa-splQ',
      bucket: 'sxy7-com-h5',
      path: `${folderName}/`,
      include: [/\.(png|jpe?g|gif|svg)(\?.*)?$/]
    }),
    new UglifyWebpackPlugin(), // 压缩js
    new CleanWebpackPlugin([folderName], {
      root: path.resolve(__dirname, '../../')
    }) // 每次打包会先清空dist目录
  ]
})
