<template>
  <TopNav></TopNav>
  <div class="content">
    <aside>
      <h2>组件列表</h2>
      <ul>
        <li>
          <router-link to="/document/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/document/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/document/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/document/tabs">Tabs 组件</router-link>
        </li>
      </ul>
    </aside>
    <div class="main">主内容</div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  name: 'Document',
  components: {
    TopNav
  }
};
</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  padding-top: 70px;
  position: fixed;
  top: 0;
  left: 0;
  > h2 {
    margin-bottom: 4px;
  }

  > ul {
    > li {
      padding: 4px 0;
    }
  }
}
</style>