import webpack, { Configuration } from "webpack";
import path from "path";
import merge from "webpack-merge";
import commConfig from "./common";

const devConfig: Configuration = {
  stats: "verbose",
  mode: "development",
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),
  ],
};
module.exports = merge.smartStrategy({ plugins: "append" })(commConfig, devConfig);
