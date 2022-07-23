<template>
  <div>
    <h1>Switch 开关</h1>
    <h2>描述</h2>
    <p>在两种状态间切换时用到的开关选择器</p>
    <h3>代码示例</h3>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <Switch v-model:value="state1"></Switch>
          <Divider direction="left">基本样式</Divider>
          <p>向Switch传入一个 value ，当Switch开关切换状态时 value 值会改变</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow1=!codeSectionShow1">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow1">{{ codeSection1 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card float>
        <CardBody>
          <Switch v-model:value="state2"
                  active-color="#55bb8a"
                  inactive-color="#f8df70"
                  point-color="#f1908c">
          </Switch>
          <Divider direction="left">自定义样式</Divider>
          <p>你可以通过设置 "active-color"、"inactive-color"、"point-color" 来改变Switch开关的激活颜色、未激活颜色和小圆点颜色</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow2=!codeSectionShow2">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow2">{{ codeSection2 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card float>
        <CardBody>
          <Switch v-model:value="state3"
                  active-text="激活文字"
                  inactive-text="未激活文字"
                  text-color="#68b88e">
          </Switch>
          <Divider direction="left">文字描述样式</Divider>
          <p>你可以通过设置 "active-text"、"inactive-text"、"text-color" 来改变Switch开关的激活状态文字、未激活状态文字及其颜色</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow3=!codeSectionShow3">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow3">{{ codeSection3 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card float>
        <CardBody>
          <Switch v-model:value="state5" disabled="true"></Switch>
          &nbsp;
          <Switch v-model:value="state4" disabled="true"></Switch>
          <Divider direction="left">禁用样式</Divider>
          <p>你可以通过 "disabled" 设置Switch开关是否禁用</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow4=!codeSectionShow4">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow4">{{ codeSection4 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch/Switch.vue';
import {ref, watch} from 'vue';
import Card from '../lib/Card/Card.vue';
import CardTitle from '../lib/Card/CardTitle.vue';
import CardBody from '../lib/Card/CardBody.vue';
import Divider from '../lib/Divider/Divider.vue';
import CodeSection from '../lib/Code/CodeSection.vue';
import Button from '../lib/Button/Button.vue';
import {useMessage} from '../lib/Message/useMessage.ts';

export default {
  setup() {
    const state1 = ref(true);
    watch(state1, (newValue, oldValue) => {
      useMessage({
        type: 'info',
        content: '开关状态：' + newValue
      });
    });
    const state2 = ref(false);
    watch(state2, (newValue, oldValue) => {
      useMessage({
        type: 'info',
        content: '开关状态：' + newValue
      });
    });
    const state3 = ref(true);
    watch(state3, (newValue, oldValue) => {
      useMessage({
        type: 'info',
        content: '开关状态：' + newValue
      });
    });
    const state4 = ref(true);
    const state5 = ref(false);
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
    const codeSection2 = ref(`
<template>
  <Switch v-model:value="state"
          active-color="#55bb8a"
          inactive-color="#f8df70"
          point-color="#f1908c">
  </Switch>
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
    const codeSection3 = ref(`
<template>
  <Switch v-model:value="state"
          active-text="激活文字"
          inactive-text="未激活文字"
          text-color="#68b88e">
  </Switch>
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
    const codeSection4 = ref(`
<template>
  <Switch v-model:value="state1" disabled></Switch>
  &nbsp;
  <Switch v-model:value="state2" disabled="true"></Switch>
</template>
<script>
  export default {
    data(){
      return {
        state1:false;
        state2:true;
      }
    }
  }
<\/script>`);

    const codeSectionShow1 = ref(false);
    const codeSectionShow2 = ref(false);
    const codeSectionShow3 = ref(false);
    const codeSectionShow4 = ref(false);
    return {
      state1,
      state2,
      state3,
      state4,
      state5,
      codeSection1,
      codeSection2,
      codeSection3,
      codeSection4,
      codeSectionShow1,
      codeSectionShow2,
      codeSectionShow3,
      codeSectionShow4,
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

.card-container {
  margin-bottom: 24px;
}

.show-code {
  margin-bottom: 20px;
}
</style>