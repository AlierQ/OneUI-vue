<template>
  <div>
    <Icon v-for="icon in svgNameList"
          :key="icon"
          :icon-class="icon"
    size="60" color="#409eff" ></Icon>
    <hr>
    <Icon v-for="icon in svgNameList"
          :key="icon"
          :icon-class="icon"
    size="60" ></Icon>
  </div>
</template>

<script lang="ts">
import svgNameList from '../assets/icons/index.ts'
export default {
  name: 'Introduce',
  setup(){
    console.log(svgNameList);
    return{
      svgNameList
    }
  }
};
</script>

<style lang="scss" scoped>

</style>