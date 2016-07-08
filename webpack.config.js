module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./app.js",
    html: "./assets/index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'eslint-loader', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0,plugins[]=react-html-attrs,plugins[]=transform-class-properties,plugins[]=transform-decorators-legacy']
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file?name=./imgs/[hash].[ext]"
      }
    ],
  },
}
