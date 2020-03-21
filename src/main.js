import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import FastClick from 'fastclick'
import '@/styles/reset.css'
import 'amfe-flexible'
import 'components/global/index.js'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.scss'
import vueg from 'vueg'
import 'assets/icon/iconfont.css'
import './styles/global.scss'
import './intercept'
NutUI.install(Vue)
// FastClick.attach(document.body) //  hack the active pseudo-classes failure caused by -webkit-overflow-scrolling touch
Vue.config.productionTip = false
// 软键盘关闭事件 console.log("键盘收起")
document.body.addEventListener('focusout', () => {
  window.scroll(0, 0) // 失焦后强制让页面归位
})
// 使用页面跳转动画
Vue.use(vueg, router, {
  enter: 'slideInRight',
  leave: 'slideInLeft'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
