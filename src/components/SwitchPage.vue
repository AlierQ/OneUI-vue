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
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue';
export default {
  setup(){
    const state1 = ref(false)
    const state2 = ref(false)
    return {
      state1,
      state2,
    }
  },
  components:{
    Switch
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  background: yellow;
  overflow: auto;
}
</style>