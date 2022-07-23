<template>
  <div>
    <h1>安装</h1>
    <h2>注意事项</h2>
    <p>⚠️该组件基于Vue3开发和使用，如果您正在使用Vue2，请您谨慎选择</p>
    <h2>安装步骤</h2>
    <p>打开终端 cd 您的Vue项目下</p>
    <CodeSection>
      {{ `cd .../.../.../your-project` }}
    </CodeSection>
    <p>你可以选择使用 <strong>npm</strong> 或者 <strong>yarn</strong> 进行安装</p>
    <CodeSection>
      {{
        `
npm install one-ui-alierq
or
yarn add one-ui-alierq`
      }}
    </CodeSection>
  </div>
</template>

<script lang="ts">
import CodeSection from '../lib/Code/CodeSection.vue';

export default {
  name: 'InstallPage',
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