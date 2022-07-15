import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
// 引入路由，这里使用hash模式
import {createWebHashHistory, createRouter} from 'vue-router';
import MyComponent from './components/MyComponent.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/mycomponent',
      component: MyComponent
    }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');

