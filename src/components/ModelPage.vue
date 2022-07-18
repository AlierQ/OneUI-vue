<template>
  <div>
    <h3>Model 对话框</h3>
    <div>
      <Model visible
             model-title="这是标题"
             @on-ok="ok"
             @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Model>
    </div>
  </div>
</template>

<script lang="ts">
import Model from '../lib/Model.vue';

export default {
  name: 'Dialog',
  components: {Model},
  setup() {
    const ok = () => {
      console.log('点击了确定');
    };
    const cancel = () => {
      console.log('点击了确定');
    };
    return {
      ok,
      cancel
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  //background: yellow;
  overflow: auto;
}
</style>