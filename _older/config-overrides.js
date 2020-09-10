const path = require("path");
const { override, addBabelPlugin } = require("customize-cra");

const moduleResolver = [
  "babel-plugin-module-resolver",
  {
    root: ["./src/"],
    alias: {
      "~": "./src"
    }
  }
];

module.exports = override(addBabelPlugin(moduleResolver));
