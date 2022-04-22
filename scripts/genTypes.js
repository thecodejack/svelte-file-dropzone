const { sveld } = require("sveld");
const pkg = require("../package.json");
const path = require('path');

sveld({
  input: "./src/index.js",
  typesOptions: {
    outDir: path.dirname(pkg.main)
  }
})