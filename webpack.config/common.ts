require("@babel/register")({
  // Ignore everything in node_modules.
  ignore: [/node_modules/],
});
import webpack, { Configuration } from "webpack";
import path from "path";
import { dependencies as externals } from "../package.json";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const commonConfig: Configuration = {
  entry: path.resolve(__dirname, "../src/index.ts"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contentHash].bundle.js",
    // https://github.com/webpack/webpack/issues/1114
    // libraryTarget: "commonjs2",
  },
  // externals: [...Object.keys(externals || {})], // for CDNs config

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    modules: [path.join(__dirname, "..", "app"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};

export default commonConfig;
