const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV == "development";
module.exports = {
  mode: isDev ? "development" : "production",
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    filename: "[name].[hash:5].js",
    path: path.resolve(__dirname, "dist"),
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: isDev && "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".js", ".ts", ".tsx", ".css", ".scss"],
    alias: { "@": path.resolve(__dirname, "src") },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: "ts-loader" }],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[local]__[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "assets/css/[name].[hash:5].css" }),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },

  devServer: { compress: true, hot: true, port: 9000 },
};
