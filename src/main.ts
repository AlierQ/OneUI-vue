import './lib/global.scss';
import './index.scss';
import {router} from './router';
import 'github-markdown-css';
import {createApp} from 'vue';
import './index.scss';
import App from './App.vue';

import './assets/style/codeStyle.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';

import 'virtual:svg-icons-register'; // 引入svg注册脚本
import Icon from './lib/Icon.vue';

const app = createApp(App);
app.use(router);
app.use(hljsVuePlugin);
app.mount('#app');
// 添加Icon全局组件
app.component('Icon', Icon);
