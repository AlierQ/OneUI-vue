<template>
  <button :class="{on:value}"
          :style="{
            '--active-color':activeColor,
            '--inactive-color':inactiveColor,
            '--point-color':pointColor,
          }"
          @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    value: {
      type: Boolean
    },
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    },
    pointColor: {
      type: String
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
$point-color: var(--point-color, #ffffff);
$active-color: var(--active-color, #409eff);
$inactive-color: var(--inactive-color, #dcdfe6);
$button-height: 22px;
$span-height: $button-height - 4px;
button {
  height: $button-height;
  width: $button-height*2;
  border: none;
  background: $inactive-color;
  border-radius: $button-height / 2;
  position: relative;
  transition: all .5s ease;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $span-height;
    width: $span-height;
    background: $point-color;
    border-radius: $span-height / 2;
    right: 2px;
    transition: all .2s ease;
  }

  &.on {
    background: $active-color;

    > span {
      left: calc(100% - #{$span-height} - 2px);
      animation: pang 0.2s;
    }

    @keyframes pang {
      0% {
        width: $span-height
      }
      50% {
        width: $span-height + 2px
      }
      100% {
        width: $span-height
      }
    }
  }

  &:focus {
    outline: none;
  }
}
</style>