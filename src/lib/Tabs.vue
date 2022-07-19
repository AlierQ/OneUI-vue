<template>
  <div>
    <div v-for="(title,index) in titles" :key="index">{{ title }}</div>
    <!--  这里用component动态添加Tabs中的Tab，相当于插槽  -->
    <component v-for="(tag,index) in defaults" :key="index" :is="tag"></component>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';

export default {
  components: {Tab},
  setup(props, context) {
    // console.log({...context});
    // context.slots.default() 存放的时Tabs内部放的所有组件
    const defaults = context.slots.default();
    // 通过其身上的.type属性就能获取到该组件信息，从而可以判断使用的是什么标签或者组件
    defaults.forEach((tag) => {
      // 如果Tabs中不是Tab就报错
      if (tag.type !== Tab) {
        throw new Error('Tabs can only put Tab inside');
      }
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    return {
      defaults,
      titles
    };
  }
};
</script>

<style lang="scss" scoped>

</style>