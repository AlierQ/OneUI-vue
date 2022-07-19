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
        <template v-slot:content>
          <p>Content of model</p>
          <p>Content of model</p>
          <p>Content of model</p>
        </template>
      </Model>
    </div>
    <br>&nbsp;
    <Button type="primary" @click="toggle">显示 Model 对话框</Button>
    <br><br>
    <h3>动态加载Model</h3>
    <br> &nbsp;
    <Button type="primary" @click="show">动态加载 Model 对话框</Button>
  </div>
</template>

<script lang="ts">
import Model from '../lib/Model.vue';
import Button from '../lib/Button.vue';
import {openModel} from '../lib/openModel.ts';
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
    const show = () => {
      console.log('动态加载 Model 对话框');
      openModel({
        title: '这里是动态加载对话框的标题',
        content: '这里是内容',
        clickOverlay:false,
        // 这里传入的 onOk 和 onCancel 可以通过返回值控制model对话框是否关闭
        onOk: () => {
          console.log('点击了确定');
        },
        onCancel: () => {
          console.log('点击了取消');
        }
      });
    };

    return {
      visible,
      ok,
      cancel,
      toggle,
      show
    };
  }
};
</script>

<style lang="scss" scoped>

</style>