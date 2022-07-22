<template>
  <div>
    <h1>Divider 分割线</h1>
    <h2>描述</h2>
    <p>区隔内容的分割线，还可以对不同章节的文本段落进行分割。</p>
    <h3>代码示例</h3>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its
            numinous summits . ——Karl Marx, German revolutionary</p>
          <Divider></Divider>
          <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its
            numinous summits . ——Karl Marx, German revolutionary</p>
          <Divider direction="left">嗨，我是分割线</Divider>
          <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its
            numinous summits . ——Karl Marx, German revolutionary</p>
          <Divider>嗨，我是分割线</Divider>
          <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its
            numinous summits . ——Karl Marx, German revolutionary</p>
          <Divider direction="right">嗨，我是分割线</Divider>
          <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its
            numinous summits . ——Karl Marx, German revolutionary</p>

          <Divider dashed></Divider>
          <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its
            numinous summits . ——Karl Marx, German revolutionary</p>
          <Divider direction="left" dashed>嗨，我是分割线</Divider>
          <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its
            numinous summits . ——Karl Marx, German revolutionary</p>
          <Divider dashed="true">嗨，我是分割线</Divider>
          <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its
            numinous summits . ——Karl Marx, German revolutionary</p>
          <Divider direction="right" dashed="true">嗨，我是分割线</Divider>
          <Divider direction="left">基本用法</Divider>
          <p>只需要向需要分割的地方插入Divider既可以，并且你可以控制是否携带文本，以及文本的位置</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow1=!codeSectionShow1">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow1">{{ codeSection1 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Card from '../lib/Card.vue';
import CardTitle from '../lib/CardTitle.vue';
import CardBody from '../lib/CardBody.vue';
import Divider from '../lib/Divider.vue';
import CodeSection from '../lib/CodeSection.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {
    Card,
    CardTitle,
    CardBody,
    Divider,
    CodeSection,
    Button,
  },
  setup() {
    const codeSection1 = ref(`
<template>
  <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its numinous summits . ——Karl Marx, German revolutionary</p>
  <Divider></Divider>
  <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its numinous summits . ——Karl Marx, German revolutionary</p>
  <Divider direction="left">嗨，我是分割线</Divider>
  <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its numinous summits . ——Karl Marx, German revolutionary</p>
  <Divider >嗨，我是分割线</Divider>
  <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its numinous summits . ——Karl Marx, German revolutionary</p>
  <Divider direction="right">嗨，我是分割线</Divider>
  <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its numinous summits . ——Karl Marx, German revolutionary</p>

  <Divider dashed></Divider>
  <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its numinous summits . ——Karl Marx, German revolutionary</p>
  <Divider direction="left" dashed>嗨，我是分割线</Divider>
  <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its numinous summits . ——Karl Marx, German revolutionary</p>
  <Divider dashed="true">嗨，我是分割线</Divider>
  <p>There is no royal road to science ,and only those who do not dread the fatiguing climb of gaining its numinous summits . ——Karl Marx, German revolutionary</p>
  <Divider direction="right" dashed="true">嗨，我是分割线</Divider>
</template>
<script>
  export default {

  }
<\/script>`);

    const codeSectionShow1 = ref(false);

    return {
      codeSection1,
      codeSectionShow1
    };
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

.card-container {
  margin-bottom: 24px;
}

.show-code {
  margin-bottom: 20px;
}
</style>