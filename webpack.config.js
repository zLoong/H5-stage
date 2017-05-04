var webpack = require('webpack');
module.exports = {
    //开启sourcemap源代码调试定位功能
    //devtool: 'source-map',
    //webpack-dev-server配置
    devServer: {
        hot: true,
        inline: true,
        host: '10.70.73.225',
        port: 2020
    },
    //入口文件，支持数组多文件模式
    entry: {
        index: './src/js/index.js'
    },
    //输出文件路径和名称
    output: {
        path: __dirname,
        filename: 'dist/[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader?safe=true' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader?safe=true!sass-loader?sourceMap' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.js$/, loader: "babel-loader" }
        ]
    },
    //其他解决方案配置
    resolve: {
        //扩展名
        extensions: [' ', '.js', '.scss'],
    },
    //webpack插件配置
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
