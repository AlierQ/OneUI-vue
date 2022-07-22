// 引入路由，这里使用hash模式
import {createWebHashHistory, createRouter} from 'vue-router';
import {h} from 'vue';
import Home from './views/Home.vue';
import Document from './views/Document.vue';
import Switch from './components/SwitchPage.vue';
import Button from './components/ButtonPage.vue';
import Model from './components/ModelPage.vue';
import Message from './components/MessagePage.vue';
import Tabs from './components/TabsPage.vue';
import Markdown from './components/Markdown.vue';
import DocumentDemo from './components/DocumentDemo.vue';

const createMarkdown = path => {
  return h(Markdown, {path: `../markdown/${path}.md`, key: path});
};
const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/document',
      component: Document,
      // 嵌套路由
      children: [
        {
          path: '',
          component: DocumentDemo,
        },
        // {
        //   path: 'introduce',
        //   component: createMarkdown('introduce'),
        // },
        // {
        //   path: 'started',
        //   component: createMarkdown('started'),
        // },
        // {
        //   path: 'install',
        //   component: createMarkdown('install'),
        // },
        {
          path: 'switch',
          component: Switch,
        },
        {
          path: 'button',
          component: Button,
        },
        {
          path: 'model',
          component: Model,
        },
        {
          path: 'message',
          component: Message,
        },
        {
          path: 'tabs',
          component: Tabs,
        }
      ]
    }
  ]
});
