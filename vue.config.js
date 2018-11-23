const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components"),
        mixins: path.resolve(__dirname, "src/mixins"),
        plugins: path.resolve(__dirname, "src/plugins"),
        types: path.resolve(__dirname, "src/types"),
        views: path.resolve(__dirname, "src/views")
      }
    }
  }
};
