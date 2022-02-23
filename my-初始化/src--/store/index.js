import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
    // 配置vuex持久化的插件数据
    import vuexPersist from 'vuex-persist'
    // 创建对象配置持久化
    const vuexLocal = new vuexPersist({
        // 定义本地存储的方式（localStorage或者sessionStorage或者cookie-不推荐）
        storage: window.localStorage,
    })
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
