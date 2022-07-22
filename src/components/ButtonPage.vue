<template>
  <div>
    <h1>Button 按钮</h1>
    <h2>描述</h2>
    <p>最基础的组件，可以用来触发逻辑业务</p>
    <h3>代码示例</h3>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <Button>Default</Button>&nbsp;
          <Button type="primary">Primary</Button>&nbsp;
          <Button type="dashed">Dashed</Button>&nbsp;
          <Button type="text">Text</Button>&nbsp;
          <Divider direction="left">基本按钮</Divider>
          <p>基本按钮有：默认按钮、主要按钮、虚线按钮、文字按钮四种样式，通过type进行设置</p>
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
          <Button type="info">Info</Button>&nbsp;
          <Button type="success">Success</Button>&nbsp;
          <Button type="warning">Warning</Button>&nbsp;
          <Button type="error">Error</Button>&nbsp;
          <Divider direction="left">色彩按钮</Divider>
          <p>色彩按钮有：信息按钮、成功按钮、警告按钮、错误按钮四种样式，同样通过type进行设置</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow2=!codeSectionShow2">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow2">{{ codeSection2 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <div class="transparent-background">
            <Button transparent>Default</Button>&nbsp;
            <Button type="primary" transparent>Primary</Button>&nbsp;
            <Button type="dashed" transparent="true">Dashed</Button>&nbsp;
            <Button type="text" transparent>Text</Button>&nbsp;
            <br><br>
            <Button type="info" transparent>Info</Button>&nbsp;
            <Button type="success" transparent="true">Success</Button>&nbsp;
            <Button type="warning" transparent="true">Warning</Button>&nbsp;
            <Button type="error" transparent>Error</Button>
          </div>
          <Divider direction="left">透明按钮</Divider>
          <p>某些情况下，你可能需要使用父元素背景作为按钮的背景色，你可以通过添加或移除"transparent"属性进行设置</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow3=!codeSectionShow3">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow3">{{ codeSection3 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <Button disabled>Default</Button>&nbsp;
          <Button type="primary" disabled>Primary</Button>&nbsp;
          <Button type="dashed" disabled>Dashed</Button>&nbsp;
          <Button type="text" disabled>Text</Button>&nbsp;
          <Button type="success" disabled>Success</Button>&nbsp;
          <br><br>
          <Button type="info" disabled="true">Info</Button>&nbsp;
          <Button type="success" disabled="true">Success</Button>&nbsp;
          <Button type="warning" disabled="true">Warning</Button>&nbsp;
          <Button type="error" disabled="true">Error</Button>
          <Divider direction="left">基本按钮禁用</Divider>
          <p>基本按钮的禁用，通过添加或移除"disabled"属性进行设置</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow4=!codeSectionShow4">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow4">{{ codeSection4 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <div class="transparent-background">
            <Button transparent disabled>Default</Button>&nbsp;
            <Button type="primary" transparent disabled>Primary</Button>&nbsp;
            <Button type="dashed" transparent disabled>Dashed</Button>&nbsp;
            <Button type="text" transparent disabled>Text</Button>&nbsp;
            <br><br>
            <Button type="info" transparent disabled>Info</Button>&nbsp;
            <Button type="success" transparent disabled>Success</Button>&nbsp;
            <Button type="warning" transparent disabled>Warning</Button>&nbsp;
            <Button type="error" transparent disabled>Error</Button>
          </div>
          <Divider direction="left">透明按钮禁用</Divider>
          <p>透明按钮的禁用，通过添加或移除"disabled"属性进行设置</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow5=!codeSectionShow5">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow5">{{ codeSection5 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <Button size="big">Default</Button>&nbsp;
          <Button type="primary" size="normal">Primary</Button>&nbsp;
          <Button type="dashed" size="small">Dashed</Button>
          &nbsp
          <Button type="text" disabled>Text</Button>&nbsp;
          <div class="transparent-background" style="margin-top: 10px;">
            <Button size="small" type="info" transparent>Info</Button>&nbsp;
            <Button type="dashed" size="small" transparent disabled>Success</Button>&nbsp;
            <Button type="warning" size="normal" transparent disabled>Warning</Button>&nbsp;
            <Button type="error" size="big" transparent>Error</Button>
          </div>
          <Divider direction="left">按钮的大小</Divider>
          <p>通过设置"size"的属性值为"normal"（默认值）、"small"、"big"，就可以更改按钮的大小</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow6=!codeSectionShow6">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow6">{{ codeSection6 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <Button loading>Default</Button>&nbsp;
          <Button loading type="primary">Primary</Button>&nbsp;
          <Button loading type="dashed">Dashed</Button>&nbsp;
          <Button loading type="text">Text</Button>&nbsp;
          <br><br>
          <Button loading type="info">Info</Button>&nbsp;
          <Button loading type="success">Success</Button>&nbsp;
          <Button loading type="warning">Warning</Button>&nbsp;
          <Button loading type="error">Error</Button>&nbsp;
          <div class="transparent-background" style="margin-top: 10px;">
            <Button loading transparent>Default</Button>&nbsp;
            <Button loading type="primary" transparent>Primary</Button>&nbsp;
            <Button loading type="dashed" transparent>Dashed</Button>&nbsp;
            <Button loading type="text" transparent>Text</Button>&nbsp;
            <br><br>
            <Button loading type="info" transparent>Info</Button>&nbsp;
            <Button loading type="success" transparent>Success</Button>&nbsp;
            <Button loading type="warning" transparent>Warning</Button>&nbsp;
            <Button loading type="error" transparent>Error</Button>
          </div>
          <Divider direction="left">加载中的按钮</Divider>
          <p>可以通过设置属性"loading"，来控制按钮当前是否处于加载状态</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow7=!codeSectionShow7">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow7">{{ codeSection7 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Card from '../lib/Card.vue';
import CardTitle from '../lib/CardTitle.vue';
import CardBody from '../lib/CardBody.vue';
import Divider from '../lib/Divider.vue';
import CodeSection from '../lib/CodeSection.vue';
import {ref} from 'vue';

export default {
  components: {
    Card,
    CardTitle,
    CardBody,
    Divider,
    Button,
    CodeSection
  },
  setup() {
    const codeSection1 = ref(`
<template>
  <Button >Default</Button> &nbsp;
  <Button type="primary">Primary</Button> &nbsp;
  <Button type="dashed">Dashed</Button> &nbsp;
  <Button type="text">Text</Button> &nbsp;
</template>
<script>
  export default {

  }
<\/script>`);
    const codeSection2 = ref(`
<template>
  <Button type="info">Info</Button>&nbsp;
  <Button type="success">Success</Button>&nbsp;
  <Button type="warning">Warning</Button>&nbsp;
  <Button type="error">Error</Button>&nbsp;
</template>
<script>
  export default {

  }
<\/script>`);
    const codeSection3 = ref(`
<template>
  <Button transparent>Default</Button>&nbsp;
  <Button type="primary" transparent>Primary</Button>&nbsp;
  <Button type="dashed" transparent="true">Dashed</Button>&nbsp;
  <Button type="text" transparent>Text</Button>&nbsp;
  <br><br>
  <Button type="info" transparent>Info</Button>&nbsp;
  <Button type="success" transparent="true">Success</Button>&nbsp;
  <Button type="warning" transparent="true">Warning</Button>&nbsp;
  <Button type="error" transparent>Error</Button>
</template>
<script>
  export default {

  }
<\/script>`);
    const codeSection4 = ref(`
<template>
  <Button disabled>Default</Button>&nbsp;
  <Button type="primary" disabled>Primary</Button>&nbsp;
  <Button type="dashed" disabled>Dashed</Button>&nbsp;
  <Button type="text" disabled>Text</Button>&nbsp;
  <Button type="success" disabled>Success</Button>&nbsp;
  <br><br>
  <Button type="info" disabled="true">Info</Button>&nbsp;
  <Button type="success" disabled="true">Success</Button>&nbsp;
  <Button type="warning" disabled="true">Warning</Button>&nbsp;
  <Button type="error" disabled="true">Error</Button>
</template>
<script>
  export default {

  }
<\/script>`);
    const codeSection5 = ref(`
<template>
  <Button transparent disabled>Default</Button>&nbsp;
  <Button type="primary" transparent disabled>Primary</Button>&nbsp;
  <Button type="dashed" transparent disabled>Dashed</Button>&nbsp;
  <Button type="text" transparent disabled>Text</Button>&nbsp;
  <br><br>&nbsp;
  <Button type="info" transparent disabled>Info</Button>&nbsp;
  <Button type="success" transparent disabled>Success</Button>&nbsp;
  <Button type="warning" transparent disabled>Warning</Button>&nbsp;
  <Button type="error" transparent disabled>Error</Button>
</template>
<script>
  export default {

  }
<\/script>`);
    const codeSection6 = ref(`
<template>
  <Button size="big">Default</Button>&nbsp;
  <Button type="primary" size="normal">Primary</Button>&nbsp;
  <Button type="dashed" size="small">Dashed</Button>&nbsp
  <Button type="text" disabled>Text</Button>&nbsp;
  <Button type="info" size="small" transparent>Info</Button>&nbsp;
  <Button type="dashed" size="small" transparent disabled>Success</Button>&nbsp;
  <Button type="warning" size="normal" transparent disabled>Warning</Button>&nbsp;
  <Button type="error" size="big" transparent>Error</Button>
</template>
<script>
  export default {

  }
<\/script>`);
    const codeSection7 = ref(`
<template>
  <Button loading>Default</Button>&nbsp;
  <Button loading type="primary">Primary</Button>&nbsp;
  <Button loading type="dashed">Dashed</Button>&nbsp;
  <Button loading type="text">Text</Button>&nbsp;
  <br><br>
  <Button loading type="info">Info</Button>&nbsp;
  <Button loading type="success">Success</Button>&nbsp;
  <Button loading type="warning">Warning</Button>&nbsp;
  <Button loading type="error">Error</Button>&nbsp;
  <br><br>
  <Button loading transparent>Default</Button>&nbsp;
  <Button loading type="primary" transparent>Primary</Button>&nbsp;
  <Button loading type="dashed" transparent>Dashed</Button>&nbsp;
  <Button loading type="text" transparent>Text</Button>&nbsp;
  <br><br>
  <Button loading type="info" transparent>Info</Button>&nbsp;
  <Button loading type="success" transparent>Success</Button>&nbsp;
  <Button loading type="warning" transparent>Warning</Button>&nbsp;
  <Button loading type="error" transparent>Error</Button>
</template>
<script>
  export default {

  }
<\/script>`);

    const codeSectionShow1 = ref(false);
    const codeSectionShow2 = ref(false);
    const codeSectionShow3 = ref(false);
    const codeSectionShow4 = ref(false);
    const codeSectionShow5 = ref(false);
    const codeSectionShow6 = ref(false);
    const codeSectionShow7 = ref(false);

    const onClick = () => {
      console.log('点击了按钮');
    };

    return {
      codeSection1,
      codeSectionShow1,
      codeSection2,
      codeSectionShow2,
      codeSection3,
      codeSectionShow3,
      codeSection4,
      codeSectionShow4,
      codeSection5,
      codeSectionShow5,
      codeSection6,
      codeSectionShow6,
      codeSection7,
      codeSectionShow7,

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

.transparent-background {
  background: #bec8c8;
  padding: 10px;
  border-radius: 4px;
}

@media (max-width: 500px) {
  Button {
    margin-bottom: 8px;
  }
}
</style>