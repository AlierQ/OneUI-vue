<template>
  <div class="one-menugroup-basic">
    <div class="one-menugroup-title">{{ title }}</div>
    <div class="one-menugroup-menuitem">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String
    }
  },
  setup(props, context) {
    console.log(props.title);
  }
};
</script>

<style lang="scss" scoped>
.one-menugroup-basic {
  //border: 1px solid red;
  color: #999;
  font-size: 14px;

  > .one-menugroup-title {
    padding: 14px 24px 14px 43px;
  }
}
</style>