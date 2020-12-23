<template>
    <div>
        <!-- 条件渲染 -->
        <p v-if="courses.length === 0">没有任何课程</p>
        <div v-else>
            <ul>
                <!-- class -->
                <li  v-for="item in courses" :key="item" :class="{active: selectedCourse === item}" 
                    @click="onClick(item)">
                    <!-- <router-link :to="`/admin/course/${item}`">{{ item }}</router-link> -->
                    {{item}}
                </li>
                <!-- style -->
                <!-- <li  v-for="item in courses" :key="item" :style="{backgroundColor: selectedCourse === item ? 'aquamarine': 'transparent'}" @click="selectedCourse = item;">
                    {{ item }}
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CourseList",
        //可以是数组，也可以是对象
        props: {
            courses: {
                type: Array, //是数据類型
                default: function() {
                    return [];
                }
            }
        },
        data() {
            return {
                selectedCourse: '' // selectedCourse只在courses列表中使用了，所以可以作于当前组件的独立数据
            }
        },
        methods: {
            onClick(courseName) {
                this.selectedCourse = courseName;
                // 1. 直接push path 
                this.$router.push('/admin/course/' + courseName);
                // 2. 使用name的方式, 定义路由时候的name，这样不容易出错
                this.$router.push({
                    name: 'detail',
                    params: {
                        name: courseName
                    }
                });
            }
        },
    }
</script>

<style scoped>
    .active {
        background-color: aquamarine;
    }
</style>