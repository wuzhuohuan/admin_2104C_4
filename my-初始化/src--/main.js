import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


// axios组件
import axios from 'axios';
Vue.prototype.$axios = axios


// 引入 Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// Vue.filter("time",(val)=>{
//   var obj= new Date(val)
//   var Y=obj.getFullYear()
//   var M=obj.getMonth()+1
//   var D=obj.getDate()
//   var H=obj.getHours()
//   var m=obj.getMinutes().toString().padStart(2,"0")
//   var s=obj.getSeconds().toString().padStart(2,"0")
//   return `${Y}/${M}/${D} ${H}:${M}:${m}:${s}`
// })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')