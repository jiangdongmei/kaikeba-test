<template>
    <div>
        <!-- 用户输入 -->
        <input type="text" v-focus :value="value" v-on:keydown.enter="addCourse" @input="onInput"><button @click="addCourse">新增</button>
    </div>
</template>

<script>
    export default {
        name: "CourseAdd",
        props: ['value'],
        methods: {
            addCourse() {
                //该操作影响的是父组件的数据，所以通知父组件执行此事件方法
                this.$emit('add-course');
            },
            onInput(e) {
                this.$emit('input', e.target.value)
            }
        },
    }
</script>

<style scoped>

</style>