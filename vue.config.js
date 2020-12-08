module.exports = {
    publicPath: "./",
    devServer: {
      // overlay: {
      //   warnings: false,
      //   errors: false
      // },
      hot: true,
      port: 8088,
      proxy: {
        "/api": {
          ws: true,
          target:'http://xh.114nz.com/',
            // process.env.NODE_ENV === "production"
            //   ? "http//xh.114nz.com/"
            //   : "http://xh.114nz.com/",
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            "^/api": ""
          }
        }
      }
    },
    lintOnSave: false//全局禁用eslint
  };
  