import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue'),
            beforEnter:(to,from,next)=>{
               if(localStorage.getItem("username")){
                   next()
               }else{
                   alert("请登录")
                   next("/About")
               }
            }
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    }
]



const router = new VueRouter({
    routes,
    mode: "history"
})

export default router