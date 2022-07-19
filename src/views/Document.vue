<template>
  <div class="doc">
    <TopNav class=".top-nav"></TopNav>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ul>
          <li>
            <router-link to="/document/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/document/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/document/dialog">Model 组件</router-link>
          </li>
          <li>
            <router-link to="/document/tabs">Tabs 组件</router-link>
          </li>
        </ul>
      </aside>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  name: 'Document',
  components: {
    TopNav
  },
  setup() {
    // 将祖先提供的 asideVisible 注入到当前组件中
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    console.log('Document: ' + asideVisible.value);

    return {asideVisible};
  },
};
</script>

<style lang="scss" scoped>
.doc {
  //border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .top-nav {
    //border: 1px solid #000;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }

  .content {
    flex-grow: 1;
    //border: 1px solid green;
    display: flex;
    overflow: auto;

    .main {
      height: 100%;
      overflow: hidden;
      flex-grow: 1;
      display: flex;

      &:deep(>div) {
        width: 100%;
        margin-top: 12px;
        margin-left: 12px;
        border-radius: 4px;
        padding: 32px;
        background: #ffffff;
        overflow: auto;
      }
    }

    aside {
      background: #f5f6f6;
      box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
      width: 200px;
      min-width: 200px;
      max-width: 200px;
      padding: 16px;

      > h2 {
        margin-bottom: 4px;
      }

      > ul {
        > li {
          padding: 4px 0;
        }
      }

      @media (max-width: 500px) {
        padding-top: 70px;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
      }
    }
  }
}
</style>