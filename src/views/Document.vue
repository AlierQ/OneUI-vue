<template>
  <div class="doc">
    <TopNav class=".top-nav"></TopNav>
    <div class="content">
      <transition name="aside">
        <aside v-if="asideVisible">
          <Menu v-model:current="path">
            <MenuTitle name="document">
              文档
            </MenuTitle>
            <Submenu name="document" open>
              <MenuItem name="introduce" to="/document/introduce">介绍</MenuItem>
              <MenuItem name="install" to="/document/install">安装</MenuItem>
              <MenuItem name="started" to="/document/started">开始使用</MenuItem>
            </Submenu>
            <MenuTitle name="component">
              组件列表
            </MenuTitle>
            <Submenu name="component" open>
              <MenuGroup title="基础">
                <MenuItem name="switch" to="/document/switch">Switch 开关</MenuItem>
                <MenuItem name="button" to="/document/button">Button 按钮</MenuItem>
              </MenuGroup>
              <MenuGroup title="全局">
                <MenuItem name="model" to="/document/model">Model 对话框</MenuItem>
                <MenuItem name="message" to="/document/message">Message 全局提示</MenuItem>
              </MenuGroup>
              <MenuGroup title="导航">
                <MenuItem name="tabs" to="/document/tabs">Tabs 标签页</MenuItem>
                <MenuItem name="menu" to="/document/menu">Menu 菜单</MenuItem>
              </MenuGroup>

              <MenuGroup title="布局">
                <MenuItem name="card" to="/document/card">Card 卡片</MenuItem>
                <MenuItem name="divider" to="/document/divider">Divider 分割线</MenuItem>
              </MenuGroup>
            </Submenu>
          </Menu>
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
import Menu from '../lib/Menu.vue';
import MenuItem from '../lib/MenuItem.vue';
import MenuGroup from '../lib/MenuGroup.vue';
import Submenu from '../lib/Submenu.vue';
import MenuTitle from '../lib/MenuTitle.vue';
import {inject, ref, Ref} from 'vue';
import {useRoute} from 'vue-router';

export default {
  components: {
    TopNav,
    Menu,
    MenuItem,
    MenuGroup,
    MenuTitle,
    Submenu,
  },
  setup() {
    // 将祖先提供的 asideVisible 注入到当前组件中
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    console.log('Document: ' + asideVisible.value);

    // 获取当前路由地址进行解析，获取到name
    const router = useRoute();
    const tempArray = router.fullPath.split('/');
    const path = ref(tempArray[tempArray.length-1])
    return {asideVisible,path};
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
      z-index: 10;
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
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