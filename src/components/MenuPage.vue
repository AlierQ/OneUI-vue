<template>
  <div>
    <h1>Menu 菜单</h1>
    <h2>描述</h2>
    <p>为页面和功能提供导航的菜单列表，常用于网站左侧</p>
    <h3>代码示例</h3>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <div class="group">
            <Menu current="1-4">
              <MenuTitle name="xxx">
                内容管理1
              </MenuTitle>
              <Submenu name="xxx" >
                <MenuItem name="1-1">菜单项1</MenuItem>
                <MenuItem name="1-2">菜单项2</MenuItem>
              </Submenu>
              <MenuTitle name="yyy">
                内容管理2
              </MenuTitle>
              <Submenu name="yyy" open>
                <MenuItem name="1-3">菜单项4</MenuItem>
                <MenuItem name="1-4">菜单项5</MenuItem>
              </Submenu>
              <MenuTitle name="zzz">
                内容管理2
              </MenuTitle>
              <Submenu name="zzz">
                <MenuGroup title="菜单组1">
                  <MenuItem name="1-5">菜单项5</MenuItem>
                  <MenuItem name="1-6">菜单项6</MenuItem>
                </MenuGroup>
                <MenuGroup title="菜单组2">
                  <MenuItem name="1-7">菜单项7</MenuItem>
                  <MenuItem name="1-8">菜单项8</MenuItem>
                </MenuGroup>
              </Submenu>
            </Menu>
          </div>
          <Divider direction="left">基本用法</Divider>
          <p>垂直导航菜单，可以内嵌子菜单</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow1=!codeSectionShow1">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow1">{{ codeSection1 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Menu from '../lib/Menu/Menu.vue';
import MenuItem from '../lib/Menu/MenuItem.vue';
import MenuGroup from '../lib/Menu/MenuGroup.vue';
import Submenu from '../lib/Menu/SubMenu.vue';
import MenuTitle from '../lib/Menu/MenuTitle.vue';
import Card from '../lib/Card/Card.vue';
import CardTitle from '../lib/Card/CardTitle.vue';
import CardBody from '../lib/Card/CardBody.vue';
import Divider from '../lib/Divider/Divider.vue';
import CodeSection from '../lib/Code/CodeSection.vue';
import Button from '../lib/Button/Button.vue';
import {ref} from 'vue';

export default {
  components: {
    Menu,
    MenuItem,
    MenuGroup,
    MenuTitle,
    Submenu,
    Card,
    CardTitle,
    CardBody,
    Divider,
    CodeSection,
    Button,
  },
  setup() {
    const codeSection1 = ref(`
<template>
  <Menu current="1-4">
    <MenuTitle name="xxx">
      内容管理1
    </MenuTitle>
    <Submenu name="xxx" >
      <MenuItem name="1-1">菜单项1</MenuItem>
      <MenuItem name="1-2">菜单项2</MenuItem>
    </Submenu>
    <MenuTitle name="yyy">
      内容管理2
    </MenuTitle>
    <Submenu name="yyy" open>
      <MenuItem name="1-3">菜单项4</MenuItem>
      <MenuItem name="1-4">菜单项5</MenuItem>
    </Submenu>
    <MenuTitle name="zzz">
      内容管理2
    </MenuTitle>
    <Submenu name="zzz">
      <MenuGroup title="菜单组1">
        <MenuItem name="1-5">菜单项5</MenuItem>
        <MenuItem name="1-6">菜单项6</MenuItem>
      </MenuGroup>
      <MenuGroup title="菜单组2">
        <MenuItem name="1-7">菜单项7</MenuItem>
        <MenuItem name="1-8">菜单项8</MenuItem>
      </MenuGroup>
    </Submenu>
  </Menu>
</template>
<script>
  import {Menu,SubMenu,MenuGroup,MenuItem} from 'one-ui-alierq'
  export default {}
<\/script>`);

    const codeSectionShow1 = ref(false);

    return {
      codeSection1,
      codeSectionShow1
    };
  }
};
</script>

<style lang="scss" scoped>
.group {
  width: 240px;
}

h1 {
  margin: 15px 0;
}

h2 {
  margin: 10px 0;
}

h3 {
  margin: 10px 0;
}

.card-container {
  margin-bottom: 24px;
}

.show-code {
  margin-bottom: 20px;
}
</style>