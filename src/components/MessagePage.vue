<template>
  <div>
    <h1>Message 全局提示</h1>
    <h2>描述</h2>
    <p>轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。</p>
    <h3>代码示例</h3>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <Button type="primary" @click="popMessage">弹出 Message 全局提示</Button>
          <Divider direction="left">普通提示</Divider>
          <p>基础的信息提示</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow1=!codeSectionShow1">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow1">{{ codeSection1 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <Button class="warp" @click="popMessage1">Success 提示</Button>&nbsp;
          <Button class="warp" @click="popMessage2">Warning 提示</Button>&nbsp;
          <Button class="warp" @click="popMessage3">Error 提示</Button>
          <Divider direction="left">不同状态的提示</Divider>
          <p>其他状态的提示：成功、警告、失败</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow2=!codeSectionShow2">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow2">{{ codeSection2 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Card from '../lib/Card/Card.vue';
import CardTitle from '../lib/Card/CardTitle.vue';
import CardBody from '../lib/Card/CardBody.vue';
import Divider from '../lib/Divider/Divider.vue';
import CodeSection from '../lib/Code/CodeSection.vue';
import Button from '../lib/Button/Button.vue';
import {useMessage} from '../lib/Message/useMessage.ts';
import Message from '../lib/Message/Message.vue';
import {ref} from 'vue';

export default {
  methods: {
    popMessage() {
      useMessage({
        type: 'info',
        content: '这里是 Message 全局提示组件'
      });
    },
    popMessage1() {
      useMessage({
        type: 'success',
        content: '这里是 Success 提示'
      });
    },
    popMessage2() {
      useMessage({
        type: 'warning',
        content: '这里是 Warning 提示'
      });
    },
    popMessage3() {
      useMessage({
        type: 'error',
        content: '这里是 Error 提示'
      });
    }
  },
  components: {
    Card,
    CardTitle,
    CardBody,
    Divider,
    CodeSection,
    Button,
    Message
  },
  setup() {
    const codeSection1 = ref(`
<template>
  <Button type="primary" @click="popMessage">弹出 Message 全局提示</Button>
</template>
<script>
  import {Button,useMessage} from 'one-ui-alierq'
  export default {
    components:{
      Button
    },
    methods:{
      popMessage(){
        useMessage({
          type: 'info',
          content: '这里是 Message 全局提示组件'
        });
      }
    },
  }
<\/script>`);
    const codeSection2 = ref(`
<template>
  <Button @click="popMessage1">弹出 Success 提示</Button>&nbsp;
  <Button @click="popMessage2">弹出 Warning 提示</Button>&nbsp;
  <Button @click="popMessage3">弹出 Error 提示</Button>
</template>
<script>
  import {Button,useMessage} from 'one-ui-alierq'
  export default {
    components:{
      Button
    },
    methods:{
      popMessage1(){
        useMessage({
          type: 'success',
          content: '这里是 Success 提示'
        });
      },
      popMessage2(){
        useMessage({
          type: 'warning',
          content: '这里是 Warning 提示'
        });
      },
      popMessage3(){
        useMessage({
          type: 'error',
          content: '这里是 Error 提示'
        });
      }
    },
  }
<\/script>`);
    const codeSectionShow1 = ref(false);
    const codeSectionShow2 = ref(false);
    return {
      codeSection1,
      codeSectionShow1,
      codeSection2,
      codeSectionShow2
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
@media (max-width: 500px) {
    .warp{
      margin-bottom: 6px;
    }
}
</style>