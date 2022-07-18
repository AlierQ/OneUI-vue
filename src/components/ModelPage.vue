<template>
  <div>
    <h3>Model 对话框</h3>
    <div>
      <Model
        :visible="visible"
        model-title="这是标题"
      >
        <!--        @on-ok="ok"
                @on-cancel="cancel"-->
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Model>
    </div>
    <br>&nbsp;
    <Button type="primary" @click="toggle">显示 Model 对话框</Button>
  </div>
</template>

<script lang="ts">
import Model from '../lib/Model.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Model},
  setup() {
    const visible = ref(false);
    const ok = () => {
      console.log('点击了确定');
    };
    const cancel = () => {
      console.log('点击了取消');
    };
    const toggle = () => {
      console.log('点击了');
      visible.value = !visible.value;
    };

    return {
      visible,
      ok,
      cancel,
      toggle
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