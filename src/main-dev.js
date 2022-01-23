import Vue from 'vue'
import App from './App.vue'

// 1. 导入 ant-design-vue 组件库
import antd from 'ant-design-vue'
// 2. 导入组件库的样式表
import 'ant-design-vue/dist/antd.css'
//3.导入vuex
import store from './store'
Vue.config.productionTip = false
// 4. 安装组件库
Vue.use(antd)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')


