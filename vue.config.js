module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  pluginOptions: {
    scss: ["~/assets/styles/global.scss"],
    electronBuilder: {
      nodeIntegration: true,
      mainProcessWatch: ["src/electron/**"],
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        files: ["**/*"]
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
