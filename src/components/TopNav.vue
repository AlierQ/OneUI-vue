<template>
  <div class="top-nav">
    <span class="toggle-menu" @click="toggleMenu"></span>
    <router-link class="logo" to="/">
      <span class="color-lump"></span>
      <span class="logo-one">One</span> <span class="logo-ui">UI</span>
    </router-link>
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
  background: #f5f6f6;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  min-height: 60px;
  align-items: center;
  position: relative;
  z-index: 10;

  > .logo {
    position: relative;
    cursor: pointer;
    margin-right: auto;
    font-family: opensans, system-ui;
    margin-top: 8px;

    > .color-lump {
      position: absolute;
      background: #409eff;
      right: 0;
      top: -8px;
      border-radius: 3px;
      width: 28px;
      height: 12px;
    }

    > .logo-one {
      font-size: 24px;
      color: #409eff;
      font-weight: 600;
    }

    > .logo-ui {
      font-size: 26px;
      color: #17233d;
      font-weight: 600;
    }
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
      margin-left: auto;
      margin-right: auto;
    }
    > .toggle-menu {
      display: inline-block;
    }
  }
}
</style>