import path from "path";
export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist"),
  },
  devServer: {
    static: "./",
    port: 3000,
    open: true,
  },
};
