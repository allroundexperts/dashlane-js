const path = require("path");

module.exports = {
  entry: "./src/dashlane.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  target: "web",
  mode: "production",
  node: {
    buffer: true,
    crypto: true,
    zlib: true
  },
  devServer: {
    contentBase: "./dist"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "dashlane.js",
    path: path.resolve(__dirname, "dist")
  }
};
