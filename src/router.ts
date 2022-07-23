// 引入路由，这里使用hash模式
import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Document from './views/Document.vue';
import Introduce from './components/IntroducePage.vue';
import Install from './components/InstallPage.vue';
import Started from './components/StartedPage.vue';
import Switch from './components/SwitchPage.vue';
import Button from './components/ButtonPage.vue';
import Model from './components/ModelPage.vue';
import Message from './components/MessagePage.vue';
import Tabs from './components/TabsPage.vue';
import Menu from './components/MenuPage.vue';
import Card from './components/CardPage.vue';
import Divider from './components/DividerPage.vue';

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
          component: Introduce,
        },
        {
          path: 'introduce',
          component: Introduce,
        },
        {
          path: 'install',
          component: Install,
        },
        {
          path: 'started',
          component: Started,
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
        },
        {
          path: 'menu',
          component: Menu,
        },
        {
          path: 'card',
          component: Card,
        },
        {
          path: 'divider',
          component: Divider,
        }
      ]
    }
  ]
});
