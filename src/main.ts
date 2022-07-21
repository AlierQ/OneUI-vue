import './lib/global.scss'
import './index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css'
import Markdown from './components/Markdown.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');

// 全局注册 Markdown
app.component("Markdown",Markdown)
