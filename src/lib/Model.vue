<template>
  <div class="one-model-shade"></div>
  <div class="one-model-wrapper">
    <div class="one-model">
      <header>这里是标题</header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <Button class="one-model-ok" type="text">取消</Button>
        <Button class="one-model-cancel" type="primary">确定</Button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  name: 'Model',
  components: {Button}
};
</script>

<style lang="scss">
.one-model {
  background: white;
  width: 520px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  &-wrapper {
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 11;
  }

  &-shade {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(55, 55, 55, .6);
  }

  > header {
    font-size: 16px;
    color: #17233d;
    padding: 14px 16px;
    border-bottom: 1px solid #e8eaec;
  }
  > main{
    font-size: 14px;
    color: #515a6e;
    padding: 16px;
    line-height: 1.5;
  }
  > footer {
    padding: 12px 18px 12px 18px;
    border-top: 1px solid #e8eaec;
    text-align: right;

    > .one-model-cancel {
      margin-left: 8px;
    }
  }

}
</style>