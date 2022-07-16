<template>
  <div>
    <h3>示例1</h3>
    <div>
      <Button>你好</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components:{
    Button
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