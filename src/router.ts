// 引入路由，这里使用hash模式
import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Document from './views/Document.vue';
import Switch from './components/SwitchPage.vue';
import Button from './components/ButtonPage.vue';
import Dialog from './components/ModelPage.vue';
import Tabs from './components/TabsPage.vue';
import Introduce from './views/Introduce.vue';
import Started from './views/Started.vue';
import Install from './views/Install.vue';
import DocumentDemo from './components/DocumentDemo.vue';

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
        {
          path: 'introduce',
          component: Introduce,
        },
        {
          path: 'started',
          component: Started,
        },
        {
          path: 'install',
          component: Install,
        },
        {
          path: 'switch',
          component: Switch,
        },
        {
          path: 'button',
          component: Button,
        },
        {
          path: 'dialog',
          component: Dialog,
        },
        {
          path: 'tabs',
          component: Tabs,
        }
      ]
    }
  ]
});
