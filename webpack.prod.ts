import { Configuration } from "webpack";
import webpackMerge from "webpack-merge";
import { commonConfig } from "./webpack.common";

const prod: Configuration = {
  mode: "production",
};

const prodConfig = webpackMerge(commonConfig, prod);

export default prodConfig;
