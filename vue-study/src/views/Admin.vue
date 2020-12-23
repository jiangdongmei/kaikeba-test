<template>
  <div class="admin">
    <!-- <Message :show.sync="isShow" class="success" -->
    <Message ref="msgSuccess" class="success">
        <!-- 具名插槽，给插槽取名字 在组件中使用name对应插槽-->
        <template v-slot:title  ><strong>恭喜</strong></template>
        <!-- 默认插槽 默认为default -->
        <template v-slot>新增课程成功</template>
    </Message>
    <!-- <Message :show.sync="showWarn" class="warning" -->
    <Message class="warning" ref="msgWarning">
        <!-- 具名插槽，给插槽取名字 在组件中使用name对应插槽-->
        <template v-slot:title  ><strong>警告</strong></template>
        <!-- 默认插槽 默认为default -->
        <template v-slot>新增课程不能为空</template>
    </Message>
    <CourseList :courses="courses"></CourseList>
    <CourseAdd @add-course="addCourse" v-model="newCourse"></CourseAdd>
    <router-view></router-view>
  </div>
</template>
<script>
import CourseList from '@/components/CourseList.vue'
import {getCourses} from '@/api/course'
import CourseAdd from '@/components/CourseAdd.vue'
import Message from '@/components/Message.vue'
export default {
  name: "Admin",
  components: {
    CourseList,
    CourseAdd,
    Message
  },
  data() {
    return {
      title: "开课吧购物车",
      newCourse: "",
      courses: []
    }
  },
  // 创建实例
  async created () {
      //组件实例已经创建，由于未挂载，dom不存在
      const courses = await getCourses(); // await只能在async中使用
      this.courses = courses;
  },
  methods: {
    addCourse() {
      // 添加course到courses，清空输入框的内容
      if(this.newCourse) {
          this.courses.push(this.newCourse);
          // this.isShow = true;
          this.$refs.msgSuccess.toggle();
          this.newCourse = "";
      } else {
          // this.showWarn = true;
          this.$refs.msgWarning.toggle();

      }
    }
  },
}
</script>
