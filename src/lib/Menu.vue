<template>
  <div class="one-menu-basic">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Menu'
};
</script>

<style lang="scss" scoped>
.one-menu-basic{
  border-right: 1px solid #e8eaec;
}
</style>