module.exports = {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i, 
          loader: "url-loader?name=app/images/[name].[ext]"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {loader: "babel-loader"},
          ]
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }
  };