<template>
  <div>
    <h3>示例1</h3>
    <div>
      <Button @click="onClick"
              @focus="onClick"
              @mouseover="onClick"
              aaa="111">你好
      </Button>
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
}
</style>