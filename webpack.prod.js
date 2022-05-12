const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode:"production",
    output:{
        clean:true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options:{
                    sources: false
                }
              },
              {
                test: /\.css$/i,
                exclude:/styles.css$/,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /styles.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
              },
        
        ]
    },

    optimization:{},

    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'styles.[fullhash].css',
        })
    ]
}