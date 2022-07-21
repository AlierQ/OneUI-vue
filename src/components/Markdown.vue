<template>
  <div>
    <article class="markdown-body" v-html="content"></article>
  </div>
</template>

<script lang="ts">

import {ref} from 'vue';

export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // const content = ref(null);
    /* @vite-ignore */
    // import(props.path).then(result => {
    //   console.log(result);
    //   content.value = result.default;
    // });
    // return {content};
  }
};
</script>