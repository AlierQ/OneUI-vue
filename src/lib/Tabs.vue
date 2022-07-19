<template>
  <div>
    <div class="one-tabs">
      <div class="one-tabs-nav" ref="nav">
        <div v-for="(title,index) in titles"
             :key="index"
             :ref="el=>{if (el) navItems[index] = el}"
             class="one-tabs-nav-item"
             :class="{selected:title === selected}"
             @click="select(title)">
          {{ title }}
        </div>
        <div class="one-tabs-nav-indicator" ref="indicator"></div>
      </div>
      <div class="one-tabs-content">
        <!--  这里用component动态添加Tabs中的Tab，相当于插槽  -->
        <component v-for="(tag,index) in defaults"
                   :key="index"
                   :is="tag"
                   class="one-tabs-content-item"
                   :class="{selected:tag.props.title === selected}">
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {onMounted, onUpdated, ref} from 'vue';

export default {
  components: {Tab},
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    // 获取到所有的nav
    const navItems = ref<HTMLDivElement[]>([]);
    // 获取到下面的状态条
    const indicator = ref<HTMLDivElement>(null);
    // 获取到nav容器
    const nav = ref<HTMLDivElement>(null);

    const updateIndicator = () => {
      // console.log(navItems);
      const divs = navItems.value;
      // 获取当前选中的元素（含有selected）
      const result = divs.filter((div) => {
        return div.classList.contains('selected');
      })[0];
      // 计算位置（当前nav item的left减去父容器的left）
      const site = ref(result.getBoundingClientRect().left - nav.value.getBoundingClientRect().left);
      // 获取宽度
      const {width} = result.getBoundingClientRect();
      // 设置下面选中条的宽度
      indicator.value.style.width = width + 'px';
      // 设置位置
      indicator.value.style.marginLeft = site.value + 'px';
    };

    onMounted(updateIndicator);
    onUpdated(updateIndicator);

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
    if (titles.length !== set.length) {
      throw new Error('Tab title should be different in Tabs');
    }

    const select = (title: string) => {
      context.emit('update:selected', title);
    };

    return {
      navItems,
      defaults,
      titles,
      indicator,
      nav,
      select,
    };
  }
};
</script>

<style lang="scss">
.one-tabs {
  $blue: #409eff;
  $color: #333;
  $border-color: #d9d9d9;

  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 16px;
      cursor: pointer;
      margin-right: 16px;
      transition: all 0.3s;
      font-size: 14px;

      &:hover {
        color: $blue;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all .25s;
    }
  }

  &-content {
    padding: 4px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>