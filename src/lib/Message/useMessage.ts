import Message from './Message.vue';
import {createApp, h} from 'vue';

export const useMessage = (options) => {
  const {type, content} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const clear = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };

  const app = createApp({
    render() {
      return h(Message,
        // 在动态渲染组件可以传入原本要用的属性
        {
          type: type,
          content: content,
        });
    }
  });
  app.mount(div);

  setTimeout(() => {
    clear();
  }, 2000);
};