const path = require('path')
const webpack = require('webpack')

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
            })
        ]
    }
}