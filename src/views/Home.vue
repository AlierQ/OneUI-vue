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
.banner {
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;

  > p {
    margin: 5px 0;
    display: flex;

    > a {
      display: inline-block;
      border: 1px solid red;
      height: 32px;
      padding: 0 20px;
      line-height: 32px;
      margin: 10px 10px;
      border-radius: 16px;
    }
  }
}
</style>