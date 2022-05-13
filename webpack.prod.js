const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');


module.exports = {
    mode:"production",
    output:{
        clean:true,
        filename: 'main.[fullhash].js',
        path: path.resolve(__dirname, 'dist'),

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
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
        
        ]
    },

    optimization:{
      minimize: true,
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        new CssMinimizerPlugin(),
      ],
  
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'styles.[fullhash].css',
        }),
        new CopyPlugin({
            patterns: [
                 {from:'src/assets/', to:'assets/'}
            ]
        }),
    ]
}