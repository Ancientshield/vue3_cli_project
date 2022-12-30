const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 跟 Vue2 一樣，關閉語法檢查
  lintOnSave: false,
});
