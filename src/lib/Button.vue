<template>
  <div :aaa="aaa" @click="onClick">
    啦啦啦
  </div>
  <button v-bind="rest">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  // 不继承属性
  inheritAttrs:false,
  name: 'Button',
  setup(props,context){
    const {aaa,onClick, ...rest} = context.attrs
    return {
      aaa,
      onClick,
      rest
    }
  }
};
</script>

<style lang="scss" scoped>

</style>