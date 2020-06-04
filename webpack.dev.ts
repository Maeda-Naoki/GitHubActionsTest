import { Configuration } from "webpack";
import webpackMerge from "webpack-merge";
import { commonConfig } from "./webpack.common";

const dev: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
};

const devConfig = webpackMerge(commonConfig, dev);

export default devConfig;
