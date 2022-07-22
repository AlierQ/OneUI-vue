import Model from './Model.vue';
import {createApp, h} from 'vue';

export const $Model = (options) => {
  const {title, content, onOk, onCancel,clickOverlay} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const clear = () => {
    // 下面的注释表示不检查错误
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };
  // 如果渲染的组件不需要传入数据你可以直接
  // createApp(Model).mount(div)
  const app = createApp({
    render() {
      return h(Model,
        // 在动态渲染组件可以传入原本要用的属性
        {
          visible: true,
          modelTitle: title,
          clickOverlay,
          // 监听事件 update:visible
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
              clear();
            }
          },
          onOk,
          onCancel,
        },
        {content: () => content});
    }
  });
  app.mount(div);
};