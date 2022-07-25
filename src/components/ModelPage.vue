<template>
  <div>
    <h1>Model 对话框</h1>
    <h2>描述</h2>
    <p>模态对话框，在浮层中显示，引导用户进行相关操作。</p>
    <h3>代码示例</h3>
    <div class="card-container">
      <Card width="100%" float="true">
        <CardBody>
          <Button type="primary" @click="toggle">显示静态 Model 对话框</Button>
          <Model
            v-model:visible="visible"
            :click-overlay="false"
            model-title="这里是静态放置的对话框的标题"
            @on-ok="ok"
            @on-cancel="cancel"
            :on-ok="ok"
            :on-cancel="cancel"
          >
            <!-- @开头是执行自定义事件回调后无条件关闭model对话框 -->
            <!-- :开头可以通过自定义事件回调的返回值控制model对话框是否关闭 -->
            <template v-slot:content>
              <p>这里是静态放置的对话框的内容</p>
              <p>这里是静态放置的对话框的内容</p>
              <p>这里是静态放置的对话框的内容</p>
            </template>
          </Model>
          <Divider direction="left">静态使用模态对话框</Divider>
          <p>在页面中放置一个 Model 对话框，通过Button控制其显示与隐藏</p>
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
          <Button type="primary" @click="show">动态加载 Model 对话框</Button>
          <Divider direction="left">动态加载模态对话框</Divider>
          <p>在页面中放置一个 Model 对话框，通过Button控制其显示与隐藏</p>
          <Divider dashed></Divider>
          <div class="show-code">
            <Button @click="codeSectionShow2=!codeSectionShow2">查看代码</Button>
          </div>
          <CodeSection v-if="codeSectionShow2">{{ codeSection2 }}</CodeSection>
        </CardBody>
      </Card>
    </div>
    <!--    <Message type="info" content="这是一条提示信息"></Message>-->
    <!--    <Button type="primary" @click="message">Message 弹出框</Button>-->
  </div>
</template>

<script lang="ts">
import Card from '../lib/Card/Card.vue';
import CardTitle from '../lib/Card/CardTitle.vue';
import CardBody from '../lib/Card/CardBody.vue';
import Divider from '../lib/Divider/Divider.vue';
import CodeSection from '../lib/Code/CodeSection.vue';
import Model from '../lib/Model/Model.vue';
import Button from '../lib/Button/Button.vue';
import {useModel} from '../lib/Model/useModel.ts';
import {ref} from 'vue';

export default {
  data() {
    return {
      visible: false
    };
  },
  components: {
    Button,
    Model,
    CardBody,
    CardTitle,
    Divider,
    CodeSection,
    Card,
  },
  methods: {
    ok() {
      console.log('点击了确定');
      return true;
    },
    cancel() {
      console.log('点击了取消');
      return true;
    },
    toggle() {
      this.visible = !this.visible;
    },
    show() {
      useModel({
        title: '这里是动态加载对话框的标题',
        content: '这里是动态加载的内容',
        clickOverlay: false,
        // onOk 和 onCancel 是点击确定和取消之后的回调函数
        // 可以通过返回值控制对话框是否消失
        onOk: () => {
          console.log('点击了确定');
          return true;
        },
        onCancel: () => {
          console.log('点击了取消');
          return false;
        }
      });
    }
  },
  setup() {
    const codeSection1 = ref(`
<template>
  <Button type="primary" @click="toggle">显示静态 Model 对话框</Button>
  <Model
    v-model:visible="visible"
    :click-overlay="false"
    model-title="这里是静态放置的对话框的标题"
    @on-ok="ok"
    @on-cancel="cancel"
    :on-ok="ok"
    :on-cancel="cancel"
  >
    <template v-slot:content>
      <p>这里是静态放置的对话框的内容</p>
      <p>这里是静态放置的对话框的内容</p>
      <p>这里是静态放置的对话框的内容</p>
    </template>
  </Model>
</template>
<script>
  import {Button, Model} from 'one-ui-alierq'
  export default {
    components:{
      Button,
      Model
    }
    data(){
      return {
        state:true;
      }
    },
    methods:{
      ok() {
        console.log('点击了确定');
        return true;
      },
      cancel() {
        console.log('点击了取消');
        return true;
      },
      toggle(){
        this.visible = !this.visible;
      },
    },
  }
<\/script>`);
    const codeSection2 = ref(`
<template>
  <Button type="primary" @click="show">动态加载 Model 对话框</Button>
</template>
<script>
  import {Button, useModel} from 'one-ui-alierq'
  export default {
    components:{
      Button
    },
    methods:{
      show(){
        useModel({
          title: '这里是动态加载对话框的标题',
          content: '这里是动态加载的内容',
          clickOverlay: false, // 控制浮层背景能否点击关闭
          // onOk 和 onCancel 是点击确定和取消之后的回调函数
          // 可以通过返回值控制对话框是否消失
          onOk: () => {
            console.log('点击了确定');
            return true
          },
          onCancel: () => {
            console.log('点击了取消');
            return false
          }
        });
      }
    },
  }
<\/script>`);

    const codeSectionShow1 = ref(false);
    const codeSectionShow2 = ref(false);

    const visible = ref(false);
    const ok = () => {
      console.log('点击了确定');
      return true;
    };
    const cancel = () => {
      console.log('点击了取消');
      return true;
    };
    const toggle = () => {
      visible.value = !visible.value;
    };
    const show = () => {
      console.log('动态加载 Model 对话框');
      useModel({
        title: '这里是动态加载对话框的标题',
        content: '这里是内容',
        clickOverlay: false,
        // onOk 和 onCancel 是点击确定和取消之后的回调函数
        // 可以通过返回值控制对话框是否消失
        onOk: () => {
          console.log('点击了确定');
          return true;
        },
        onCancel: () => {
          console.log('点击了取消');
          return false;
        }
      });
    };
    return {
      // visible,
      // ok,
      // cancel,
      // toggle,
      // show,
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
</style>