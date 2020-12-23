<template>
    <div v-if="show">
        <transition enter-active-class="animated bounceIn"
                    leave-active-class="animated bounceOut">
            <div class="message" >
                <!-- 如果名为title的插槽没有内容，则默认显示插槽中的内容，如果有值，则显示上方的内容 -->
                <slot name="title">默认名称</slot>
                <!-- 占位，占位类容为新增课程成功 -->
                <slot></slot>
                <span class="message-box-close" @click="toggle">X</span>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data() {
            return {
                show: false
            }
        },
        // 挂载实例
        mounted () {
            this.$bus.$on('message-close', ()=> {
                // 此处必须用箭头函数的方式，代表的是当前组件的实例，如果使用匿名函数，this表示匿名函数的指向，而不是当前组件实例
                this.toggle();  
            });
        },
        methods: {
            toggle() {
                this.show = !this.show;
            }
        },
    }
</script>

<style scoped>
    .message {
        padding: 10px 20px;
    }
    .success{
        background-color: aquamarine;
        border: solid 1px #42b983;
    }
    .warning{
        background-color:burlywood;
        border: solid 1px burlywood;
    }
    .message-box-close{
        float: right;
        right: 0px;
    }
    .message-box-close:hover{
        cursor: pointer;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active{
        transition: opacity 1s;
    }
</style>