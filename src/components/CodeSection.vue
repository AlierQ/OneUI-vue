<template>
  <highlightjs autodetect :code="codeString" />
  <slot v-if="false"></slot>
</template>

<script lang="ts">
import 'prismjs';
import {ref} from 'vue';
import 'highlight.js/styles/atom-one-dark.css';
export default {
  setup(props, context) {
    const codeString = ref(context.slots.default()[0].children);

    return {
      codeString
    };
  }
};
</script>

<style lang="scss" scoped>
.one-code-basic {
  border-radius: 4px;
}
</style>