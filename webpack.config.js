const path = require ('path');
const MiniCssExtractPlugin = require ("mini-css-extract-plugin");

module.exports = {
    entry: "./Fronted/js/index.js",
    output: {
        filename: "salida.js",
        path: path.resolve(__dirname, "assets")
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [               
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
              ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin()
      ]
    };