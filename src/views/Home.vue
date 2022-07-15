<template>
  <div class="top-nav">
    <div class="logo">Logo</div>
    <div class="menu">
      <ul>
        <li>menu1</li>
        <li>menu2</li>
      </ul>
    </div>
  </div>
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
export default {
  name: 'Home.vue'
};
</script>

<style lang="scss" scoped>
  .top-nav{
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    .logo{}
    >.menu{
      >ul{
        display: flex;
        >li{
          padding: 0 10px;
        }
      }
    }
  }
</style>