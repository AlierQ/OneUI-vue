<template>
  <div>
    <h3>示例1</h3>
    <div class="show">
      &nbsp;
      <Button>Default</Button>&nbsp;
      <Button type="primary">Primary</Button>&nbsp;
      <Button type="dashed">Dashed</Button>&nbsp;
      <Button type="text">Text</Button>&nbsp;
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {
    Button
  },
  setup() {
    const onClick = () => {
      console.log('点击了按钮');
    };

    return {
      onClick
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  //background: yellow;
  overflow: auto;
  .show{
    padding: 10px 0;
    overflow: hidden;
    //border: 1px solid red;
  }
}
</style>