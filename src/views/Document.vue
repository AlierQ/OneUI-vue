<template>
  <TopNav></TopNav>
  <div class="content">
    <aside>侧边栏</aside>
    <div class="main">主内容</div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  name: 'Document',
  components:{
    TopNav
  }
};
</script>

<style lang="scss" scoped>

</style>