<!--  -->
<template>
    <div>
        this is course detail page
        当前课程为<span>{{$route.params.name}}</span>
    </div>
</template>

<script>
    export default {
        // created () {
        //     // 再一次进入当前组件时，界面不会刷新（如果存在接口调用，接口只会在第一个进入时才会调用，所以存在组件复用问题）
        //     // 通过监听路由变化可以实现每次进入路由都会去调取接口
        //     console.log('获取异步数据');
        // },
        watch: {
            $route: {
                immediate: true,
                handler(newValue) {
                    console.log(newValue);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>