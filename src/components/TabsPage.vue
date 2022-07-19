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
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import {ref} from 'vue';

export default {
  components: {
    Tabs,
    Tab
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

</style>