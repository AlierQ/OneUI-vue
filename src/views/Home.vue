<template>
  <TopNav></TopNav>
  <div class="banner">
    <h1>UI</h1>
    <h2>一个厉害的UI框架</h2>
    <p>
      <a href="">Github</a>
      <a href="">开始</a>
    </p>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
export default {
  name: 'Home.vue',
  components: {TopNav}
};
</script>

<style lang="scss" scoped>

</style>