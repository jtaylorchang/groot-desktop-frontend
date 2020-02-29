module.exports = {
  resolve: {
    extensions: [".jsx"]
  },
  entry: __dirname + "/app/views/mmm/index.jsx",
  output: {
    path: __dirname + "/public/js/",
    library: "reactapp",
    libraryTarget: "umd",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
