<template>
  <div class="one-model-shade"></div>
  <div class="one-model">
    <header>这里是标题</header>
    <main>这里是内容</main>
    <footer>
      <Button type="text">取消</Button>
      <Button type="primary">确定</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';
export default {
  name: 'Model',
  components: {Button}
};
</script>

<style lang="scss" scoped>
//rgba(55,55,55,.6);
</style>