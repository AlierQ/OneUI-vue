<template>
  <div>
    <h1>Tabs 标签页</h1>
    <h2>描述</h2>
    <p>选项卡切换组件，常用于同一级别下区域大块内容的的收纳和展现</p>
    <h3>代码示例</h3>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <Tabs v-model:selected="selected">
            <Tab title="导航1">内容1</Tab>
            <Tab title="导航2">内容2</Tab>
            <Tab title="导航3">内容3</Tab>
          </Tabs>
          <Divider direction="left">基本用法</Divider>
          <p>通过点击导航栏实现相应内容的切换</p>
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
import Tabs from '../lib/Tabs/Tabs.vue';
import Tab from '../lib/Tabs/Tab.vue';
import Card from '../lib/Card/Card.vue';
import CardTitle from '../lib/Card/CardTitle.vue';
import CardBody from '../lib/Card/CardBody.vue';
import Divider from '../lib/Divider/Divider.vue';
import CodeSection from '../lib/Code/CodeSection.vue';
import Button from '../lib/Button/Button.vue';
import {ref} from 'vue';

export default {
  components: {
    Tabs,
    Tab,
    Card,
    CardTitle,
    CardBody,
    Divider,
    CodeSection,
    Button,
  },
  setup() {
    const tabsData = ref([
      {title: '导航1', content: '内容1'},
      {title: '导航2', content: '内容2'},
      {title: '导航3', content: '内容3'},
    ]);
    const selected = ref('导航1');

    const codeSection1 = ref(`
<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">内容3</Tab>
  </Tabs>
</template>
<script>
  import {Tabs,Tab} from 'one-ui-alierq'
  export default {
    components: {
      Tabs,
      Tab
    },
    data(){
      return {
        selected:'导航2'
      }
    }
  }
<\/script>`);

    const codeSectionShow1 = ref(false);
    return {
      selected,
      tabsData,
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