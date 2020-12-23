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