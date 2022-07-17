<template>
  <div>
    <h3>基本按钮</h3>
    <div class="show">
      &nbsp;
      <Button>Default</Button>&nbsp;
      <Button type="primary">Primary</Button>&nbsp;
      <Button type="dashed">Dashed</Button>&nbsp;
      <Button type="text">Text</Button>&nbsp;
    </div>
    <h3>颜色按钮</h3>
    <div class="show">
      &nbsp;
      <Button type="info">Info</Button>&nbsp;
      <Button type="success">Success</Button>&nbsp;
      <Button type="warning">Warning</Button>&nbsp;
      <Button type="error">Error</Button>&nbsp;
    </div>
    <h3>透明样式</h3>
    <div class="show" style="background: #bec8c8">
      &nbsp;
      <Button transparent>Default</Button>&nbsp;
      <Button type="primary" transparent>Primary</Button>&nbsp;
      <Button type="dashed" transparent>Dashed</Button>&nbsp;
      <Button type="text" transparent>Text</Button>&nbsp;
      <br><br>&nbsp;
      <Button type="info" transparent>Info</Button>&nbsp;
      <Button type="success" transparent>Success</Button>&nbsp;
      <Button type="warning" transparent>Warning</Button>&nbsp;
      <Button type="error" transparent>Error</Button>
    </div>
    <h3>禁用按钮</h3>
    <div class="show">
      &nbsp;
      <Button disabled @click="onClick">Default</Button>&nbsp;
      <Button type="primary" disabled>Primary</Button>&nbsp;
      <Button type="dashed" disabled>Dashed</Button>&nbsp;
      <Button type="text" disabled>Text</Button>&nbsp;
      <Button type="success" disabled>Success</Button>&nbsp;
    </div>
    <h3>透明禁用样式</h3>
    <div class="show" style="background: #bec8c8">
      &nbsp;
      <Button transparent disabled>Default</Button>&nbsp;
      <Button type="primary" transparent disabled>Primary</Button>&nbsp;
      <Button type="dashed" transparent disabled>Dashed</Button>&nbsp;
      <Button type="text" transparent disabled>Text</Button>&nbsp;
      <br><br>&nbsp;
      <Button @click="onClick" type="info" transparent disabled>Info</Button>&nbsp;
      <Button type="success" transparent disabled>Success</Button>&nbsp;
      <Button type="warning" transparent disabled>Warning</Button>&nbsp;
      <Button type="error" transparent disabled>Error</Button>
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

  .show {
    padding: 10px 0;
    overflow: hidden;
    //border: 1px solid red;
  }
}
</style>