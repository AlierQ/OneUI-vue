<template>
  <button>
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Switch'
};
</script>

<style lang="scss" scoped>
$bg-color:#409eff;
$button-height: 22px;
$span-height: $button-height - 4px;
button {
  height: $button-height;
  width: $button-height*2;
  border: none;
  background: $bg-color;
  border-radius: $button-height / 2;
  position: relative;
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $span-height;
    width: $span-height;
    background: white;
    border-radius: $span-height / 2;
    right: 2px;
    transition: all .5s ease;
  }
  &:hover span{
    left: calc(100% - #{$span-height} - 2px);
  }
}
</style>