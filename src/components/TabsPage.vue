<template>
  <div>
    <h3>Tabs 标签页</h3>
    <div>
      <Tabs>
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
        <Tab title="导航3">内容3</Tab>
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';

export default {
  components: {
    Tabs,
    Tab
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  //background: yellow;
  overflow: auto;
}
</style>