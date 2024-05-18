const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8774,
    client: {
      overlay: {
        runtimeErrors: false
      }
    }
  },
  lintOnSave: false
})
