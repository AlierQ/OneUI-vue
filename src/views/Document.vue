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
            <router-link to="/document/dialog">Dialog 组件</router-link>
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
  }

  .content {
    flex-grow: 1;
    //border: 1px solid green;
    display: flex;
    overflow: auto;

    .main {
      height: 100%;
      overflow: hidden;
      //border: 1px solid #2c3e50;
      flex-grow: 1;
      display: flex;
    }

    aside {
      background: lightblue;
      width: 150px;
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