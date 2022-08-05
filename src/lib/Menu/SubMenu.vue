<template>
  <transition name="fade" @before-enter="beforeEnter">
    <div ref="subMenu"
         class="one-submenu-basic"
         :style="{'--height':height + 'px'}"
         v-show="state[name]">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import {inject, ref, Ref, nextTick} from 'vue';

export default {
  props: {
    name: String
  },
  setup(props) {
    const titles = inject<Ref<object>>('titles');
    const subMenu = ref<HTMLDivElement>(null);
    const height = ref(null);

    const beforeEnter = (el) => {
      nextTick(() => {
        height.value = el.scrollHeight;
      });
    };

    return {
      state: titles,
      subMenu,
      height,
      beforeEnter
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