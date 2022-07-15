<template>
  <div class="top-nav">
    <div class="logo" @click="toggleMenu">Logo</div>
    <div class="menu">
      <ul>
        <li>menu1</li>
        <li>menu2</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">

import {inject, Ref} from 'vue';

export default {
  name: 'TopNav',
  setup() {
    // 将祖先提供的 变量 注入到当前组件中
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    console.log('TopNav: ' + asideVisible.value);

    // 显示、隐藏菜单栏
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };

    return {toggleMenu};
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  background: pink;
  border: 1px solid pink;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  height: 50px;
  align-items: center;
  position: relative;
  z-index: 10;

  > .menu {
    > ul {
      display: flex;

      > li {
        padding: 0 10px;
      }
    }
  }
}
</style>