<template>
  <div>
    <Switch v-model:value="isOpen" ></Switch>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue';
export default {
  setup(){
    const isOpen = ref(false)
    return {
      isOpen
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