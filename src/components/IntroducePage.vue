<template>
  <div>
    <h1>介绍</h1>

    <p>👋你好，欢迎使用 <strong style="color: #409eff">One</strong> <strong>UI</strong></p>

    <p class="indent"><strong>One UI</strong> 是一款简单易用的开源前端UI组件，它基于 <strong>Vue3</strong> 进行开发，使用
      <strong>TypeScript</strong> 进行编写，并使用 <strong>Vite3</strong> 进行项目构建和打包。
      One UI使用了当下流行的扁平化设计使得组件的风格简洁、美观。此外One UI 的使用使用方式也是极为的简单、便捷。</p>

    <p class="indent"><strong>One UI</strong> 在编写的过程中尽可能的不使用第三方库，几乎所有组件均为手写开发。此外，<strong>One UI</strong>
      组件在编写中一直秉承了简洁的原则，所有的组件源码都足够简洁易懂。并且我会在此文档中展示组件的使用效果以及示例代码，希望对你的开发有所帮助</p>

    <p>如果你对 <strong>One UI</strong> 感兴趣，请移步至 Github <a href="https://github.com/AlierQ/OneUI-vue" class="link">[传送门]</a>。当然，也可以欢迎star
    </p>
  </div>
</template>

<script lang="ts">
// import svgNameList from '../assets/icons/index.ts';

export default {
  name: 'Introduce',
  // setup() {
  //   console.log(svgNameList);
  //   return {
  //     svgNameList
  //   };
  // }
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

.link {
  color: #409eff;
}
</style>