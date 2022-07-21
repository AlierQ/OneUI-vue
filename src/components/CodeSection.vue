<template>
  <highlightjs autodetect :code="codeString" />
  <slot v-if="false"></slot>
</template>

<script lang="ts">
import 'prismjs';
import {ref} from 'vue';
// import 'prismjs/themes/prism.css';
import 'highlight.js/styles/atom-one-dark.css';
// import '../lib/prism.css';
// 代码高亮库
const Prism = (window as any).Prism;
export default {
  setup(props, context) {
    // console.log(context.slots.default()[0].children);
    const codeString = ref(context.slots.default()[0].children);

    return {
      Prism,
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