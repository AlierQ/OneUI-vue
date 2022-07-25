<template>
  <div>
    <h1>Card 卡片</h1>
    <h2>描述</h2>
    <p>基础容器，用来显示文字、图片等内容，也可以配合其它组件一起使用。</p>
    <h3>代码示例</h3>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <Card>
            <CardTitle>这里是卡片的头部</CardTitle>
            <CardBody>
              <p>这里是卡片的内容</p>
              <p>下面给你展示我的logo</p>
              <img src="../assets/images/logo.png" style="border-radius: 10px;width:250px ;" alt="">
              <p>挺有设计感的吧</p>
              <p>这里是卡片的内容</p>
            </CardBody>
          </Card>
          <Divider direction="left">基本用法</Divider>
          <p>自定义标题和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，十分灵活</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow1=!codeSectionShow1">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow1">{{ codeSection1 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card float="true">
        <CardBody>
          <Card width="300px">
            <CardBody>
              <div style="width: 100%; margin: 0 auto;">
                <img src="../assets/images/logo.png" style="border-radius: 10px;width: 100%;" alt="">
              </div>
              <div style="text-align: center">
                <p style="font-weight: 600">一款简洁易用的前端UI组件</p>
              </div>
            </CardBody>
          </Card>
          <Divider direction="left">简洁的卡片</Divider>
          <p>只包含内容区域，没有标题</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow2=!codeSectionShow2">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow2">{{ codeSection2 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card float="true">
        <CardBody>
          <Card width="200px">
            <CardTitle>这是标题</CardTitle>
            <CardBody>
              <p>这是宽度为350px的卡片</p>
            </CardBody>
          </Card>
          <br>
          <Card width="50%">
            <CardTitle>这是标题</CardTitle>
            <CardBody>
              <p>这是宽度为父元素50%的卡片</p>
            </CardBody>
          </Card>
          <br>
          <Card>
            <CardTitle>这是标题</CardTitle>
            <CardBody>
              <p>默认宽度为父元素的100%</p>
            </CardBody>
          </Card>
          <Divider direction="left">自定义宽度</Divider>
          <p>卡片可以通过 width 属性自定义宽度，默认与父元素的宽度相同</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow3=!codeSectionShow3">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow3">{{ codeSection3 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <div class="card-container">
      <Card float="true">
        <CardBody>
          <div style="display: flex;justify-content: space-around;">
            <Card width="45%" float>
              <CardTitle>这是标题</CardTitle>
              <CardBody>
                <p>这是有浮动阴影的卡片</p>
              </CardBody>
            </Card>
            <Card width="45%">
              <CardTitle>这是标题</CardTitle>
              <CardBody>
                <p>这是禁用浮动阴影的卡片</p>
              </CardBody>
            </Card>
          </div>
          <Divider direction="left">卡片浮动阴影</Divider>
          <p>卡片可以通过 float 属性设置卡片是否开启浮动阴影，默认不开启</p>
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
import Card from '../lib/Card/Card.vue';
import CardTitle from '../lib/Card/CardTitle.vue';
import CardBody from '../lib/Card/CardBody.vue';
import Divider from '../lib/Divider/Divider.vue';
import CodeSection from '../lib/Code/CodeSection.vue';
import Button from '../lib/Button/Button.vue';
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
  <Card>
    <CardTitle>这里是卡片的头部</CardTitle>
    <CardBody>
      <p>这里是卡片的内容</p>
      <p>下面给你展示我的logo</p>
      <img src="../assets/images/logo.png" style="border-radius: 10px" alt="">
      <p>挺有设计感的吧</p>
      <p>这里是卡片的内容</p>
    </CardBody>
  </Card>
</template>
<script>
  import {Card,CardTitle,CardBody} from 'one-ui-alierq'
  export default {
    components:{
      Card,
      CardTitle,
      CardBody
    }
  }
<\/script>`);
    const codeSection2 = ref(`
<template>
  <Card width="350px">
    <CardBody>
      <div style="width: 300px; margin: 0 auto;">
        <img src="../assets/images/logo.png"
             style="border-radius: 10px;width: 300px;" alt="">
      </div>
      <div style="text-align: center">
        <p style="font-weight: 600">一款简洁易用的前端UI组件</p>
      </div>
    </CardBody>
  </Card>
</template>
<script>
  import {Card,CardBody} from 'one-ui-alierq'
  export default {
    components:{
      Card,
      CardBody
    }
  }
<\/script>`);
    const codeSection3 = ref(`
<template>
  <Card width="200px">
    <CardTitle>这是标题</CardTitle>
    <CardBody>
      <p>这是宽度为350px的卡片</p>
    </CardBody>
  </Card>
  <br>
  <Card width="50%">
    <CardTitle>这是标题</CardTitle>
    <CardBody>
      <p>这是宽度为父元素50%的卡片</p>
    </CardBody>
  </Card>
  <br>
  <Card>
    <CardTitle>这是标题</CardTitle>
    <CardBody>
      <p>默认宽度为父元素的100%</p>
    </CardBody>
  </Card>
</template>
<script>
  import {Card,CardTitle,CardBody} from 'one-ui-alierq'
  export default {
    components:{
      Card,
      CardTitle,
      CardBody
    }
  }
<\/script>`);
    const codeSection4 = ref(`
<template>
  <Card width="45%" float>
    <CardTitle>这是标题</CardTitle>
    <CardBody>
      <p>这是有浮动阴影的卡片</p>
    </CardBody>
  </Card>
  <Card width="45%">
    <CardTitle>这是标题</CardTitle>
    <CardBody>
      <p>这是禁用浮动阴影的卡片</p>
    </CardBody>
  </Card>
</template>
<script>
  import {Card,CardTitle,CardBody} from 'one-ui-alierq'
  export default {
    components:{
      Card,
      CardTitle,
      CardBody
    }
  }
<\/script>`);

    const codeSectionShow1 = ref(false);
    const codeSectionShow2 = ref(false);
    const codeSectionShow3 = ref(false);
    const codeSectionShow4 = ref(false);

    return {
      codeSection1,
      codeSectionShow1,
      codeSection2,
      codeSectionShow2,
      codeSection3,
      codeSectionShow3,
      codeSection4,
      codeSectionShow4
    };
  }
};
</script>

<style lang="scss" scoped>
.group {
  width: 240px;
}

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