<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {provide, ref} from 'vue';

export default {
  name: 'App',
  setup() {
    const asideVisible = ref(false)
    // 提供 asideVisible 后代子孙都能够访问到
    provide('asideVisible',asideVisible)
  },
};
</script>
