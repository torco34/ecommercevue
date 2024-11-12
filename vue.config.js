// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   css: {
//     loaderOptions: {
//       sass: {
//         additionalData: `@import "@/scss/_variables.scss";`,
//       },
//     },
//   },
// });
// // (Inside vue.config.js)
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/nombre-repositorio/' : '/'
// }
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/_variables.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/ecommercevue/' : '/'
});
