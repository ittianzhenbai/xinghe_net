module.exports = {
    // chainWebpack: config => {
    //   config
    //     .plugin('html')
    //     .tap(args => {
    //       args[0].title= '浙江省兴合集团有限责任公司'
    //       return args
    //     })
    // },
    publicPath: "./",
    devServer: {
      overlay: {
        warnings: false,
        errors: false
      },
      hot: true,
      port: 8088,
      proxy: {
        "/api": {
          ws: true,
          target:
            process.env.NODE_ENV === "production"
              ? "http//xh.114nz.com/"
              : "http://xh.114nz.com/",
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
  