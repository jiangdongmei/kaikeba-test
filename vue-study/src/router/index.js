import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 动态添加路由需要去掉，在动态添加的地方粘贴
  // {
  //   path: '/admin',
  //   name: 'Admin',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
  //   // 嵌套路由， 需要在嵌套处增加路由出口<router-view></router-view>
  //   children: [{
  //     path: '/admin/course/:name',
  //     name: 'detail',
  //     component: ()=> import('../views/Detail.vue')
  //   }],
  //   meta: {
  //     auth: true
  //   },
  //   beforeEnter(to, from, next) {
  //     //判断登录状态
  //     if (window.isLogin) {
  //       next();
  //     } else {
  //       router.push('/login?redirect=' + to.fullPath);
  //     }
  //   }
  // },
  {
    path: '/course/:name',
    name: 'Detail',
    component: ()=> import('../views/Detail.vue')
  }, 
  {
    path: '/login',
    name: "login",
    component: () => import('../views/Login.vue')
  }, 
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
// 路由全局守卫，即所有路由都做一次拦截功能
// router.beforeEach((to, form, next) => {
//   // 判断当前路由是否需要去检测登录状态
//     if(to.meta && to.meta.auth) {
//       //判断登录状态
//       if (window.isLogin) {
//         next();
//       } else {
//         router.push('/login?redirect=' + to.fullPath);
//       }
//     } else {
//       next();
//     }
// }); 

export default router
