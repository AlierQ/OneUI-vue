<template>
  <div>
    <h1>Switch 开关</h1>
    <h2>描述</h2>
    <p>在两种状态间切换时用到的开关选择器</p>
    <h3>代码示例</h3>
    <Card>
      <CardBody>
        <Switch v-model:value="state1"></Switch>
        <Divider direction="left">基本样式</Divider>
        <p>传入一个value，开关按钮value值会改变</p>
        <Divider dashed></Divider>
        <div class="show-code">
          <Button @click="codeSectionShow1=!codeSectionShow1">查看代码</Button>
        </div>
        <CodeSection v-if="codeSectionShow1">{{ codeSection1 }}</CodeSection>
      </CardBody>
    </Card>
    <h3>默认样式</h3>
    <Switch v-model:value="state1"></Switch>
    <h3>自定义样式</h3>
    <Switch v-model:value="state2"
            active-color="#fb5430"
            inactive-color="#add8e6"
            point-color="#499c54">
    </Switch>
    <h3>文字描述样式</h3>
    <Switch v-model:value="state3"
            active-text="关闭"
            inactive-text="开启"
            text-color="#ffc0cb">
    </Switch>
    <h3>禁用样式</h3>
    <Switch v-model:value="state4" disabled="true"></Switch>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
import Card from '../lib/Card.vue';
import CardTitle from '../lib/CardTitle.vue';
import CardBody from '../lib/CardBody.vue';
import Divider from '../lib/Divider.vue';
import CodeSection from '../lib/CodeSection.vue';
import Button from '../lib/Button.vue';

export default {
  setup() {
    const state1 = ref(true);
    const state2 = ref(true);
    const state3 = ref(false);
    const state4 = ref(true);
    const codeSection1 = ref(`
<template>
  <Switch v-model:value="state"></Switch>
</template>
<script>
  export default {
    data(){
      return {
        state:true;
      }
    }
  }
<\/script>`);
    const codeSectionShow1 = ref(false);
    return {
      state1,
      state2,
      state3,
      state4,
      codeSection1,
      codeSectionShow1
    };
  },
  components: {
    Button,
    CodeSection,
    Divider,
    CardBody,
    CardTitle,
    Card,
    Switch,
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

.show-code {
  //text-align: center;
  margin-bottom: 20px;
}
</style>