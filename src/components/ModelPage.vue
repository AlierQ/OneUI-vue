<template>
  <div>
    <h3>Model 对话框</h3>
    <div>
      <Model
        v-model:visible="visible"
        :click-overlay="false"
        model-title="this is model title"
        @on-ok="ok"
        @on-cancel="cancel"

        :on-ok="ok"
        :on-cancel="cancel"
      >
        <!-- @开头是执行自定义事件回调后无条件关闭model对话框 -->
        <!-- :开头可以通过自定义事件回调的返回值控制model对话框是否关闭 -->
        <p>Content of model</p>
        <p>Content of model</p>
        <p>Content of model</p>
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
      return true;
    };
    const cancel = () => {
      console.log('点击了取消');
      return true;
    };
    const toggle = () => {
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