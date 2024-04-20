We have to add style-loader and css loader in the dependency using below command running in project root folder.

```bash
npm install --save-dev style-loader css-loader
```

then we have to add these loader for css file in the webpack.config.js file

```js
module.exports =  {
  module: {
    rules: [
      {
        test: /\.?css/,
        use: ["style-loader", "css-loader"],
      },
    ];
  }
}
```

for production we use mini-css-extract-plugin instead of the style-loader. to use this install dependency using below command.

```bash
npm install --save-dev mini-css-extract-plugin
```

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.?css/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ];
  },
  plugins: [new MiniCssExtractPlugin()],
}
```

To setup the scss file for css we need 2 dependencies

1. node-sass
2. sass-loader

install these dependencies using below commands

```bash
npm install --save-dev node-sass sass-loader
```

then add sass-loader in the rules for the scss file as below

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.?(css|scss)/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ];
  },
  plugins: [new MiniCssExtractPlugin()],
}
```
