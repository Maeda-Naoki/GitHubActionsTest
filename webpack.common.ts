import * as path from "path";
import { Configuration } from "webpack";
import DotenvWebpackPlugin from "dotenv-webpack";

export const commonConfig: Configuration = {
  target: "web",
  entry: path.resolve(__dirname, "src", "main.ts"),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      authentication: path.join(__dirname, "assets", "authentication"),
    },
  },
  plugins: [
    new DotenvWebpackPlugin({
      systemvars: true,
    }),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
};

console.log(commonConfig);
