<template>
  <div>
    <h3>示例1</h3>
    <div class="show">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
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
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    width: 300px;
  }
}
</style>