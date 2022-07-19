<template>
  <div class="container">
    <TopNav class="top-nav"></TopNav>
    <div class="banner">
      <h1>One UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p>
        <a href="">Github</a>
        <router-link to="/document">开始</router-link>
      </p>
    </div>
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

.top-nav {
  &:deep(.toggle-menu) {
    display: none;
  }
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  padding-top: 100px;

  > p {
    margin: 5px 0;
    display: flex;

    > a {
      display: inline-block;
      border: 1px solid #f5f6f6;
      height: 32px;
      padding: 0 20px;
      line-height: 32px;
      margin: 10px 10px;
      border-radius: 16px;
    }
  }
}
</style>