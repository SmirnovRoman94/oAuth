const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "https://smirnovroman94.github.io/oAuth/",
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8080/',
  }
})
