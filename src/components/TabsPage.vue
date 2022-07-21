<template>
  <div>
    <h3>Tabs 标签页</h3>
    <div>
      <Tabs v-model:selected="selected">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
        <Tab title="导航3">内容3</Tab>
      </Tabs>
    </div>
    <h3>MenuGroup展示</h3>
    <div class="group">
      <Menu checked="1-2">
        <MenuTitle name="xxx">
          <svg style="width: 24px; height: 24px; vertical-align: middle" class="iconpark-icon"><use href="#-moxingxunlian"></use></svg>
          内容管理1
        </MenuTitle>
        <Submenu name="xxx">
          <MenuItem name="1-1">菜单项1</MenuItem>
          <MenuItem name="1-2">菜单项2</MenuItem>
        </Submenu>
        <MenuTitle name="yyy">
          内容管理2
        </MenuTitle>
        <Submenu name="yyy">
          <MenuItem name="1-3">菜单项4</MenuItem>
          <MenuItem name="1-4">菜单项5</MenuItem>
        </Submenu>
        <MenuTitle name="zzz">
          内容管理2
        </MenuTitle>
        <Submenu name="zzz">
          <MenuGroup title="菜单组1">
            <MenuItem name="1-5">菜单项1</MenuItem>
            <MenuItem name="1-6">菜单项2</MenuItem>
          </MenuGroup>
          <MenuGroup title="菜单组2">
            <MenuItem name="1-7">菜单项1</MenuItem>
            <MenuItem name="1-8">菜单项2</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
    </div>
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import Menu from '../lib/Menu.vue';
import MenuItem from '../lib/MenuItem.vue';
import MenuGroup from '../lib/MenuGroup.vue';
import Submenu from '../lib/Submenu.vue';
import MenuTitle from '../lib/MenuTitle.vue';
import {ref} from 'vue';

export default {
  components: {
    Tabs,
    Tab,
    Menu,
    MenuItem,
    MenuGroup,
    MenuTitle,
    Submenu
  },
  setup() {
    const tabsData = ref([
      {title: '导航1', content: '内容1'},
      {title: '导航2', content: '内容2'},
      {title: '导航3', content: '内容3'},
    ]);
    const selected = ref('导航2');
    return {
      selected,
      tabsData
    };
  }
};
</script>

<style lang="scss" scoped>
.group {
  width: 240px;
}
</style>