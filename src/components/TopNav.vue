<template>
  <div class="top-nav">
    <span class="toggle-menu" @click="toggleMenu"></span>
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
  justify-content: center;
  padding: 0 10px;
  min-height: 60px;
  align-items: center;
  position: relative;
  z-index: 10;

  > .logo {
    margin-right: auto;
  }

  > .menu {
    > ul {
      display: flex;

      > li {
        padding: 0 10px;
      }
    }
  }

  > .toggle-menu {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggle-menu {
      display: inline-block;
    }
  }
}
</style>