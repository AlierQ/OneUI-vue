<template>
  <div>
    <div class="one-tabs">
      <div class="one-tabs-nav">
        <div class="one-tabs-nav-item" v-for="(title,index) in titles" :key="index">{{ title }}</div>
      </div>
      <div class="on-tabs-content">
        <!--  这里用component动态添加Tabs中的Tab，相当于插槽  -->
        <component class="one-tabs-content-item" v-for="(tag,index) in defaults" :key="index" :is="tag"></component>
      </div>
    </div>
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

    // 限制 Tab 的 title 不能够重复
    let set = [...new Set(titles)];
    if (titles.length !== set.length){
      throw new Error('Tab title should be different in Tabs');
    }

    return {
      defaults,
      titles
    };
  }
};
</script>

<style lang="scss" scoped>
.one-tabs {
  $blue: #409eff;
  $color: #333;
  $border-color: #d9d9d9;

  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;


    &-item {
      padding: 8px 16px;
      cursor: pointer;
      margin-right: 16px;
      transition: all 0.3s;
      font-size: 14px;

      &:hover {
        color: #409eff;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>