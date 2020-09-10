// const path = require("path");

const {
  override,
  addBabelPlugin,
  addWebpackModuleRule
} = require("customize-cra");

const moduleResolver = [
  "babel-plugin-module-resolver",
  {
    root: ["./src/"],
    alias: {
      "~": "./src"
    }
  }
];

const fontLoad = {
  rules: [
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/"
          }
        }
      ]
    }
  ]
};

module.exports = override(
  addBabelPlugin(moduleResolver)
  // addWebpackModuleRule(fontLoad)
);
