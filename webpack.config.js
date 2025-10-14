const path = require("path");

module.exports = {
  entry: "./client/src/index.js",
  output: {
    path: path.join(__dirname, "client/public"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/, // for JS and JSX
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/, // SCSS support
        use: [
          "style-loader", // Inject styles into DOM
          "css-loader", // Turn CSS into JS
          "sass-loader", // Compile SCSS to CSS
        ],
      },
      {
        test: /\.css$/, // still support normal CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // so you can import without extension
  },
};
