<template>
  <div>
    <h1>开始使用</h1>
    <h2>引入组件</h2>
    <p>你可以在 main.ts/js 中引入全局注册，也可以在当前组件中引入注册，引入组件代码：</p>
    <CodeSection>
      {{ `import { Button, Switch, Card, ... } from "coast-ui-vue3"` }}
    </CodeSection>
    <h2>引入样式</h2>
    <p>引入组件之后，您还需要引入样式文件，才能够使得组件正确显示，引入样式代码：</p>
    <CodeSection>
      {{ `import 'one-ui-alierq/dist/style.css'` }}
    </CodeSection>
  </div>
</template>

<script lang="ts">
import CodeSection from '../lib/Code/CodeSection.vue';

export default {
  components: {
    CodeSection
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 15px 0;
}

h2 {
  margin: 10px 0;
}

h3 {
  margin: 10px 0;
}

p {
  font-size: 16px;
  line-height: 1.8;
  margin: 10px 0;
}

.indent {
  text-indent: 20px;
}
</style>