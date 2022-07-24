<template>
  <div class="one-menu-basic">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {provide, ref, watch} from 'vue';
import MenuTitle from './MenuTitle.vue';

export default {
  props: {
    current: {
      type: String,
      default: null
    }
  },
  setup(props, context) {
    const titles = ref({});
    const checked = ref(props.current);
    context.slots.default().forEach((el) => {
      if (el.type === MenuTitle) {
        titles.value[el.props.name] = true;
      }
    });
    provide('titles', titles);
    provide('checked', checked);

    watch(checked,(newValue)=>{
      context.emit('update:current',newValue)
    })
    return {titles};
  }
};
</script>

<style lang="scss">
.one-menu-basic {
  border-right: 1px solid #e8eaec;
}
</style>