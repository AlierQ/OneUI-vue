<template>
  <button :class="{on:value}"
          @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  props: {
    value: {
      type: Boolean
    }
  },
  setup(props, content) {
    const toggle = () => {
      content.emit('update:value', !props.value);
    };
    return {
      toggle
    };
  }
};
</script>

<style lang="scss" scoped>
$button-bg-color-on: #409eff;
$button-bg-color-off: #dcdfe6;
$span-bg-color: #fff;
$button-height: 22px;
$span-height: $button-height - 4px;
button {
  height: $button-height;
  width: $button-height*2;
  border: none;
  background: $button-bg-color-off;
  border-radius: $button-height / 2;
  position: relative;
  transition: all .5s ease;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $span-height;
    width: $span-height;
    background: $span-bg-color;
    border-radius: $span-height / 2;
    right: 2px;
    transition: all .2s ease;
  }

  &.on {
    background: $button-bg-color-on;

    > span {
      left: calc(100% - #{$span-height} - 2px);
    }
  }

  &:focus {
    outline: none;
  }
}
</style>