<template>
  <div class="one-menu-basic">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {provide, ref} from 'vue';
import MenuTitle from '../lib/MenuTitle.vue';

export default {
  props: {
    checked: {
      type: String,
      default: null
    }
  },
  setup(props, context) {
    const titles = ref({});
    const checked = ref(props.checked);
    context.slots.default().forEach((el) => {
      if (el.type === MenuTitle) {
        titles.value[el.props.name] = true;
      }
    });
    provide('titles', titles);
    provide('checked', checked);
    return {titles};
  }
};
</script>

<style lang="scss">
.one-menu-basic {
  border-right: 1px solid #e8eaec;
}
</style>