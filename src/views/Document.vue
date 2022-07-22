<template>
  <div class="doc">
    <TopNav class=".top-nav"></TopNav>
    <div class="content">
      <transition name="aside">
        <aside v-if="asideVisible">
          <h2>文档</h2>
          <ul>
            <li>
              <router-link to="/document/introduce">介绍</router-link>
            </li>
            <li>
              <router-link to="/document/install">安装</router-link>
            </li>
            <li>
              <router-link to="/document/started">开始使用</router-link>
            </li>
          </ul>
          <h2>组件列表</h2>
          <ul>
            <li>
              <router-link to="/document/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/document/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/document/model">Model 组件</router-link>
            </li>
            <li>
              <router-link to="/document/message">Message 组件</router-link>
            </li>
            <li>
              <router-link to="/document/tabs">Tabs 组件</router-link>
            </li>
            <li>
              <router-link to="/document/menu">Menu 组件</router-link>
            </li>
            <li>
              <router-link to="/document/card">Card 组件</router-link>
            </li>
            <li>
              <router-link to="/document/divider">Divider 组件</router-link>
            </li>
          </ul>
        </aside>
      </transition>
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
  height: 100vh;
  display: flex;
  flex-direction: column;

  .top-nav {
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    z-index: 11;
  }

  .content {
    flex-grow: 1;
    display: flex;
    overflow: auto;

    .main {
      height: 100%;
      overflow: hidden;
      flex-grow: 1;
      display: flex;

      &:deep(> div) {
        width: 100%;
        margin: 12px;
        border-radius: 4px;
        padding: 32px;
        background: #ffffff;
        overflow: auto;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }

    aside {
      background: #f5f6f6;
      box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
      width: 200px;
      min-width: 200px;
      max-width: 200px;
      padding: 16px;
      z-index: 10;

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

.router-link-active {
  color: #409eff;
  text-decoration: underline;
}

.aside-enter-active, .aside-leave-active {
  transition: all .5s ease;
}

.aside-enter-from, .aside-leave-to {
  margin-left: -200px;
  opacity: 0;
}
</style>