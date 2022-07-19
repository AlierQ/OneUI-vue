<template>
  <div>
    <h3>默认样式</h3>
    <Switch v-model:value="state1"></Switch>
    <h3>自定义样式</h3>
    <Switch v-model:value="state2"
            active-color="#fb5430"
            inactive-color="#add8e6"
            point-color="#499c54">
    </Switch>
    <h3>文字描述样式</h3>
    <Switch v-model:value="state3"
            active-text="关闭"
            inactive-text="开启"
            text-color="#ffc0cb">
    </Switch>
    <h3>禁用样式</h3>
    <Switch v-model:value="state4" disabled="true"></Switch>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  setup() {
    const state1 = ref(true);
    const state2 = ref(true);
    const state3 = ref(false);
    const state4 = ref(true);
    return {
      state1,
      state2,
      state3,
      state4,
    };
  },
  components: {
    Switch
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  margin-top: 12px;
  margin-left: 12px;
  border-radius: 4px;
  padding: 32px;
  background: #ffffff;
  overflow: auto;
}
</style>