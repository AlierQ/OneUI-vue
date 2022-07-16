<template>
  <button class="basic">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  props: {
    type: String
  },
  setup(props, context) {
  }
};
</script>

<style lang="scss" scoped>
.basic {
  background: skyblue;
  height: 30px;
  line-height: 30px;
  border: none;
  border-radius: 4px;
  padding:0 15px;
  cursor: pointer;
}
</style>