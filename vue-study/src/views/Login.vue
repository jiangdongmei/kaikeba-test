<template>
  <div v-if="!isLogin">
    <button @click="login" ref="login">登录</button><br />
    <button @click="loginOut">退出</button>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    login() {
      this.$refs.login.setAttribute('disabled', true);
      // 使用commit出发mutation从而来修改isLogin的状态值
      // this.$store.commit('login');
      // 如果是异步的操作，则可以通过dispatch来操作出发mutation
      this.$store.dispatch('login', 'admin').then(() => {
        // 动态添加路由
        this.$router.addRoutes([
          {
            path: "/admin",
            name: "Admin",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
            // 嵌套路由， 需要在嵌套处增加路由出口<router-view></router-view>
            children: [
              {
                path: "/admin/course/:name",
                name: "detail",
                component: () => import("../views/Detail.vue"),
              },
            ],
            meta: {
              auth: true,
            },
          },
        ]);
        this.$router.push(this.$route.query.redirect);
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        } else {
          this.$router.push({
            name: "Admin",
          });
        }
      }).catch(() => {
        alert("用户名或密码错误");
      }).finally(() => {
        this.$refs.login.setAttribute('disabled', false);
      });
    },
    loginOut() {
      this.$store.commit("loginOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>