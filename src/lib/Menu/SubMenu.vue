<template>
  <transition name="fade">
    <div ref="subMenu"
         class="one-submenu-basic"
         :style="{'--height':height + 'px'}"
         v-show="state[name]">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
import {inject, onMounted, ref, Ref} from 'vue';

export default {
  props: {
    open: {
      type: String
    },
    name: String
  },
  setup(props) {
    const titles = inject<Ref<object>>('titles');
    const subMenu = ref<HTMLDivElement>(null);
    const height = ref(null);

    onMounted(() => {
      height.value = subMenu.value.getBoundingClientRect().height;
      subMenu.value.style.height = height.value;
      if(props.open===''||props.open==='true')
        return;
      titles.value[props.name] = false;
    });

    return {
      state: titles,
      subMenu,
      height,
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
  transition: all .15s ease;
}

.fade-enter-from, .fade-leave-to {
  height: 0;
}
</style>