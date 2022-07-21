<template>
  <div>
    <article class="markdown-body" v-html="md"></article>
  </div>
</template>


<script lang="ts">
import md from '../markdown/introduce.md';

export default {
  setup() {
    return {
      md
    };
  }
};
</script>