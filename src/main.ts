import './lib/global.scss';
import './index.scss';
import {router} from './router';
import 'github-markdown-css';
import {createApp} from 'vue';
import './index.scss';
import App from './App.vue';
// import 'highlight.js/styles/vs.css';
import './lib/codeStyle.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';

const app = createApp(App);
app.use(router);
app.use(hljsVuePlugin);
app.mount('#app');
