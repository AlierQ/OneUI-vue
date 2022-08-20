<template>
  <transition :name="first?'fade':''" @enter="onEnter">
    <div ref="subMenu"
         class="one-submenu-basic"
         :style="{'--height':height}"
         v-show="state[name]">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import {inject, ref, Ref, onMounted} from 'vue';

export default {
  props: {
    name: String
  },
  setup(props) {
    const titles = inject<Ref<object>>('titles');
    const subMenu = ref<HTMLDivElement>(null);
    const height = ref(null);

    const first = ref(null);

    onMounted(() => {
      // 根据open的当前菜单展开状态设置，第一次的值
      // 展开的第一次为false，动画不加载
      // 为展开的为true，保证后续动画加载
      first.value = !titles.value[props.name];
    });

    const onEnter = (el) => {
      // 保证第一次没有加载的展开元素能够正常的加载
      first.value = true;
      height.value = el.scrollHeight + 'px';
    };

    return {
      state: titles,
      subMenu,
      height,
      first,
      onEnter,
    };
  }
};
</script>

<style lang="scss">
.one-submenu-basic {
  $height: var(--height);
  height: $height;
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: all .25s ease;
}

.fade-enter-from, .fade-leave-to {
  height: 0;
}
</style>