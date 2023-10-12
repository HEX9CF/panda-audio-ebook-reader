const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: '岁岁廿廿的节气之旅 - 有声电子读本',
        target: [
          {
            target: 'nsis',
            arch: [
              'ia32'
            ]
          }
        ],
        nsis: {
          oneClick: false,
          perMachine: true,
          allowElevation: false,
          allowToChangeInstallationDirectory: true,
          deleteAppDataOnUninstall: true,
          createDesktopShortcut: true,
          createStartMenuShortcut: true
        }
      }
    }
  }
})
