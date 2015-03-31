module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'build/bundle.js'
  },
  externals: {
    "react": "React",
    "kefir": "Kefir"
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
