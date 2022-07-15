<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {provide, ref} from 'vue';
export default {
  name: 'App',
  setup() {
    // 获取页面的宽度
    const width = document.documentElement.clientWidth
    // 如果页大于500px就不需要按钮弹出组件
    const asideVisible = ref(width>=500?true:false)
    // 提供 asideVisible 后代子孙都能够访问到
    provide('asideVisible',asideVisible)
  },
};
</script>
