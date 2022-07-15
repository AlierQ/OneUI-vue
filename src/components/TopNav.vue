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
</template>

<script lang="ts">
export default {
  name: 'TopNav'
};
</script>

<style lang="scss" scoped>
.top-nav{
  background: pink;
  border: 1px solid pink;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  height: 50px;
  align-items: center;
  position: relative;
  z-index: 10;
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