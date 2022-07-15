// 引入路由，这里使用hash模式
import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Document from './views/Document.vue';
import Switch from './components/Switch.vue';
import Button from './components/Button.vue';
import Dialog from './components/Dialog.vue';
import Tabs from './components/Tabs.vue';

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
          path: '/document/switch',
          component: Switch,
        },
        {
          path: '/document/button',
          component: Button,
        },
        {
          path: '/document/dialog',
          component: Dialog,
        },
        {
          path: '/document/tabs',
          component: Tabs,
        }
      ]
    }
  ]
});
