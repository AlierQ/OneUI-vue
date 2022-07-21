<template>
  <div class="one-menuItem-basic checked" >
    <slot></slot>
  </div>

</template>

<script lang="ts">
export default {
  name: 'MenuItem'
};
</script>

<style lang="scss" scoped>
.one-menuItem-basic {
  color: #515a6e;
  cursor: pointer;
  padding: 14px 24px 14px 43px;
  transition: all .25s;

  &:hover {
    color: #2d8cf0;
  }
  &.checked{
    color: #2d8cf0;
    background: #f0faff;
    border-right: 2px solid#409eff;
  }
}
</style>