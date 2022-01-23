module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  chainWebpack: (config) => {
    //生产环境
    config.when(process.env.NODE_ENV === "production", (config) => {
      config.entry('app').clear().add('./src/main-pro.js')
      config.set("externals", {
        vue: "Vue",
        "ant-design-vue": "antd",
        axios:'axios',
        vuex:'Vuex'
      });
      config.plugin('html').tap(args=>{
        args[0].isProd=true
        return args
      })
    });
    //开发环境
    config.when(process.env.NODE_ENV==='development',config=>{
      config.entry('app').clear().add('./src/main-dev.js')
      config.plugin('html').tap(args=>{
        args[0].isProd=false
        return args
      })
    })
  },
};
