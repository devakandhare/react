create a folder for the project called project1. Then change to project1 directory and initialize project using npm init command select default options and initialize the project.

```bash
mkdir project1
cd project1
npm init
```

if you have project1 directory setup project can initialize using command

```bash
npm init .
```

Then you need to create src folder which contains all the source code for your project

```bash
mkdir src
cd src
```

Then create index.jsx file in the src directory which is the entry point for your project. Then we need 2 major dependency for the react project.

1. react
2. react-dom

then we can switch to the project1 folder which is root folder for our project where we have package.json file and run npm install command to get the react and react-dom dependencies.

```bash
npm install --save react react-dom
```

Then we can add below sample hello word program to the index.jsx file.

```js
import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById("app");
const container = ReactDOM.createRoot(root);

function App() {
  return <h1>React Starter Project</h1>;
}

container.render(<App />);
```

To build the project we need build tool. One of the most popular build tool in javascript is webpack. To build the project we need below webpack dependencies in our project.

1. webpack
2. webpack-cli
3. webpack-dev-server

We have to change our directory to project root folder and run the below command to install these dependencies.

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

once we installed the webpack dependencies in our project we can add scripts in package.json to build the project and run the development server as well.
add below scripts in package.json file in root project folder.

```json
{
  "build": "webpack --mode=production",
  "dev": "webpack serve --mode=development"
}
```

to build the project with webpack we have to define the configuration setting in webpack.config.js file

```js
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
};
```

To run the javascript with the html we need to add html-webpack-plugin in project

```bash
npm install --save-dev html-webpack-plugin
```

and then we need to add the entry of plugin in the plugin section of the webpack.config.js file

```js
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
```

as we know React uses modern syntax and jsx which may not supported by all the browser which need to convert into javascript to run in the browser. for this we need babel to transpile the code.

to use babel we need

1. @babel/core
2. babel-loader

install these dependencies using below command

```bash
npm install --save-dev @babel/core babel-loader
```

then add below entry in the webpack.config.js file to use the babel loader for project javascript files.

```js
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
```

then we have to define rules for bable for that we need to add below dependencies.

1. @babel/preset-env
2. @babel/preset-react

add dependencies using below command

```bash
npm install --save-dev @babel/preset-env @babel/preset-react
```

then add them in config file

```js
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            preset: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
```

Adding CSS into the react project
To add css in the react project we need css loader dependency to the project as well as etup css file rule in module of the webpack.config.js file also.
install css-loader using:

```bash
npm install --save-dev style-loader css-loader
```

then add loader in webpack configuration

```js
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            preset: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.?css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
```
