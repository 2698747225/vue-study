const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    configureWebpack: {
        context: path.resolve(__dirname, './'),
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            port: 8088,
            hot: true,
            compress: true,
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                '@views': resolve('./src/views'),
                '@com': resolve('./src/components'),
                // 'jquery': resolve('jquery')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                // $: 'jquery',
            }),
            new CopyWebpackPlugin([{
                from: path.join(__dirname, "./src/json/*.json"),
                to: path.join(__dirname, "./dist/json/"),
                // 删除所有目录引用，仅使用最终文件
                flatten: true
            }])
        ],
    },
    // chainWebpack: config => {
    //     // GraphQL Loader
    //     config.module
    //         .rule('json')
    //         .test(/\.json$/)
    //         .use('json')
    //         .loader('json-loader')
    //         .end()
    // }
}