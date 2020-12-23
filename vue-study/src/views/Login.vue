<template>
    <div v-if="!isLogin">
        <button @click="login">登录</button><br>
        <button @click="loginOut">退出</button>
    </div>
</template>

<script>
    export default {
        computed: {
            isLogin() {
                return window.login;
            }
        },
        methods: {
            login() {
                window.isLogin = true;
                // 动态添加路由
                this.$router.addRoutes([{
                    path: '/admin',
                    name: 'Admin',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
                    // 嵌套路由， 需要在嵌套处增加路由出口<router-view></router-view>
                    children: [{
                        path: '/admin/course/:name',
                        name: 'detail',
                        component: ()=> import('../views/Detail.vue')
                    }],
                    meta: {
                        auth: true
                    },
                    beforeEnter(to, from, next) {
                        //判断登录状态
                        if (window.isLogin) {
                            next();
                        } else {
                            this.$router.push('/login?redirect=' + to.fullPath);
                        }
                    }
                }]);
                if(this.$route.query.redirect) {
                    this.$router.push(this.$route.query.redirect);
                } else {
                    this.$router.push({
                        name: 'Admin'
                    });
                }
                
            },
            loginOut() {
                window.isLogin = false;
                this.$router.push('/login');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>