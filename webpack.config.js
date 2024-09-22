const path = require("path");

module.exports = {
  target: "node",
  entry: "./server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  externals: {
    mongodb: 'commonjs mongodb',  
    mongoose: 'commonjs mongoose', 
    express: 'commonjs express', 
  },
  mode: "production",
};
