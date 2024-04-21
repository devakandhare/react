To work with fonts and images we need to use url-loader. to install url loader use below command.

```bash
npm install --save-dev url-loader
```

we can download fonts from google fonts - https://fonts.google.com/selection
then extract those fonts and keep them under src/asset/fonts folder

then create font.scc file in the src folder and import these fonts in this file

than add the configuraiton for url loader in webpack.config.js file in rules

```js
{
    test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
    use: {
            loader: 'url-loader',
    },
}
```
