---
toc: content
title: Modal（对话框）
nav:
  title: 组件
group:
  title: 反馈
  order: 6
demo:
  cols: 2
---

# Modal（对话框）

模态对话框。

<code src="./basic.tsx">基本</code>
<code src="./async.tsx" description="点击确定后异步关闭对话框，例如提交表单。">异步关闭</code>
<code src="./footer.tsx" description="更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。">自定义页脚</code>
<code src="./confirm.tsx" description="使用 `confirm()` 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭。">确认对话框</code>
<code src="./locale.tsx" description="设置 `okText` 与 `cancelText` 以自定义按钮文字。">国际化</code>
<code src="./manual.tsx" description="通过返回的 `instance` 手动更新和关闭对话框。">手动更新和移除</code>
<code src="./position.tsx" description="使用 `centered` 或类似 `style.top` 的样式来设置对话框位置。">自定义位置</code>
<code src="./button-props.tsx" description="传入 `okButtonProps` 和 `cancelButtonProps` 可分别自定义确定按钮和取消按钮的 props。">自定义页脚按钮属性</code>
<code src="./hooks.tsx" description="通过 `Modal.useModal` 创建支持读取 context 的 `contextHolder`。">使用 hooks 获得上下文</code>
<code src="./custom-render.tsx" description="自定义渲染对话框, 可通过 `react-draggable` 来实现拖拽。">自定义渲染对话框</code>
<code src="./width.tsx" description="使用 `width` 来设置模态对话框的宽度。">自定义宽度</code>
<code src="./static-info.tsx" description="在绝大多数场景，都不需要静态方法。它无法消费 context，例如无法响应动态主题。请优先使用 hooks 版本或者 `App` 组件提供的 Modal 实例。">静态方法</code>
<code src="./destory-all.tsx" description="使用 `Modal.destroyAll()` 可以销毁弹出的确认窗。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题。">销毁确认对话框</code>

## API

| 参数                   | 说明                                                              | 类型                                                   | 默认值               | 版本 |
| ---------------------- | ----------------------------------------------------------------- | ------------------------------------------------------ | -------------------- | ---- |
| afterClose             | Modal 完全关闭后的回调                                            | function                                               | -                    |      |
| bodyStyle              | Modal body 样式                                                   | CSSProperties                                          |                      |      |
| cancelButtonProps      | cancel 按钮 props                                                 | ButtonProps                                            | -                    |      |
| cancelText             | 取消按钮文字                                                      | ReactNode                                              | `取消`               |      |
| centered               | 垂直居中展示 Modal                                                | boolean                                                | false                |      |
| closable               | 是否显示右上角的关闭按钮                                          | boolean                                                | true                 |      |
| closeIcon              | 自定义关闭图标                                                    | ReactNode                                              | &lt;CloseOutlined /> |      |
| confirmLoading         | 确定按钮 loading                                                  | boolean                                                | false                |      |
| destroyOnClose         | 关闭时销毁 Modal 里的子元素                                       | boolean                                                | false                |      |
| focusTriggerAfterClose | 对话框关闭后是否需要聚焦触发元素                                  | boolean                                                | true                 |      |
| footer                 | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}`        | ReactNode                                              | (确定取消按钮)       |      |
| forceRender            | 强制渲染 Modal                                                    | boolean                                                | false                |      |
| getContainer           | 指定 Modal 挂载的节点，但依旧为全局展示，`false` 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body        |      |
| keyboard               | 是否支持键盘 esc 关闭                                             | boolean                                                | true                 |      |
| mask                   | 是否展示遮罩                                                      | boolean                                                | true                 |      |
| maskClosable           | 点击蒙层是否允许关闭                                              | boolean                                                | true                 |      |
| maskStyle              | 遮罩样式                                                          | CSSProperties                                          |                      |      |
| modalRender            | 自定义渲染对话框                                                  | (node: ReactNode) => ReactNode                         | -                    |      |
| okButtonProps          | ok 按钮 props                                                     | ButtonProps                                            | -                    |      |
| okText                 | 确认按钮文字                                                      | ReactNode                                              | `确定`               |      |
| okType                 | 确认按钮类型                                                      | string                                                 | `primary`            |      |
| style                  | 可用于设置浮层的样式，调整浮层位置等                              | CSSProperties                                          | -                    |      |
| title                  | 标题                                                              | ReactNode                                              | -                    |      |
| open                   | 对话框是否可见                                                    | boolean                                                | -                    |      |
| width                  | 宽度                                                              | string \| number                                       | 520                  |      |
| wrapClassName          | 对话框外层容器的类名                                              | string                                                 | -                    |      |
| zIndex                 | 设置 Modal 的 `z-index`                                           | number                                                 | 1000                 |      |
| onCancel               | 点击遮罩层或右上角叉或取消按钮的回调                              | function(e)                                            | -                    |      |
| onOk                   | 点击确定回调                                                      | function(e)                                            | -                    |      |
| afterOpenChange        | 打开和关闭 Modal 时动画结束后的回调                               | (open: boolean) => void                                | -                    |      |

#### 注意

- `<Modal />` 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 `destroyOnClose`。
- `<Modal />` 和 Form 一起配合使用时，设置 `destroyOnClose` 也不会在 Modal 关闭时销毁表单字段数据，需要设置 `<Form preserve={false} />`。
- `Modal.method()` RTL 模式仅支持 hooks 用法。

### Modal.method()

包括：

- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`
- `Modal.confirm`

以上均为一个函数，参数为 object，具体属性如下：

| 参数              | 说明                                                             | 类型                                                   | 默认值        | 版本 |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------ | ------------- | ---- |
| afterClose        | Modal 完全关闭后的回调                                           | function                                               | -             |      |
| autoFocusButton   | 指定自动获得焦点的按钮                                           | null \| `ok` \| `cancel`                               | `ok`          |      |
| bodyStyle         | Modal body 样式                                                  | CSSProperties                                          |               |      |
| cancelButtonProps | cancel 按钮 props                                                | ButtonProps                                            | -             |      |
| cancelText        | 设置 Modal.confirm 取消按钮文字                                  | string                                                 | `取消`        |      |
| centered          | 垂直居中展示 Modal                                               | boolean                                                | false         |      |
| className         | 容器类名                                                         | string                                                 | -             |      |
| closable          | 是否显示右上角的关闭按钮                                         | boolean                                                | false         |      |
| closeIcon         | 自定义关闭图标                                                   | ReactNode                                              | undefined     |      |
| content           | 内容                                                             | ReactNode                                              | -             |      |
| footer            | 底部内容，当不需要默认底部按钮时，可以设为 `footer: null`        | ReactNode                                              | -             |      |
| getContainer      | 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom              | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |      |
| icon              | 自定义图标                                                       | ReactNode                                              |               |      |
| keyboard          | 是否支持键盘 esc 关闭                                            | boolean                                                | true          |      |
| mask              | 是否展示遮罩                                                     | boolean                                                | true          |      |
| maskClosable      | 点击蒙层是否允许关闭                                             | boolean                                                | false         |      |
| maskStyle         | 遮罩样式                                                         | object                                                 | {}            |      |
| okButtonProps     | ok 按钮 props                                                    | ButtonProps                                            | -             |      |
| okText            | 确认按钮文字                                                     | string                                                 | `确定`        |      |
| okType            | 确认按钮类型                                                     | string                                                 | `primary`     |      |
| style             | 可用于设置浮层的样式，调整浮层位置等                             | CSSProperties                                          | -             |      |
| title             | 标题                                                             | ReactNode                                              | -             |      |
| width             | 宽度                                                             | string \| number                                       | 416           |      |
| wrapClassName     | 对话框外层容器的类名                                             | string                                                 | -             |      |
| zIndex            | 设置 Modal 的 `z-index`                                          | number                                                 | 1000          |      |
| onCancel          | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭     | function(close)                                        | -             |      |
| onOk              | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function(close)                                        | -             |      |

以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。

```js
const modal = Modal.info();

modal.update({
  title: '修改的标题',
  content: '修改的内容',
});

modal.update((prevConfig) => ({
  ...prevConfig,
  title: `${prevConfig.title}（新）`,
}));

modal.destroy();
```

- `Modal.destroyAll`

使用 `Modal.destroyAll()` 可以销毁弹出的确认窗（即上述的 `Modal.info`、`Modal.success`、`Modal.error`、`Modal.warning`、`Modal.confirm`）。通常用于路由监听当中，处理路由前进、后退不能销毁确认对话框的问题，而不用各处去使用实例的返回值进行关闭（`modal.destroy()` 适用于主动关闭，而不是路由这样被动关闭）

```js
import { browserHistory } from 'react-router';

// router change
browserHistory.listen(() => {
  Modal.destroyAll();
});
```

### Modal.useModal()

当你需要使用 Context 时，可以通过 `Modal.useModal` 创建一个 `contextHolder` 插入子节点中。通过 hooks 创建的临时 Modal 将会得到 `contextHolder` 所在位置的所有上下文。创建的 `modal` 对象拥有与 [`Modal.method`](#modalmethod) 相同的创建通知方法。

```js
const [modal, contextHolder] = Modal.useModal();

React.useEffect(() => {
  modal.confirm({
    // ...
  });
}, []);

return <div>{contextHolder}</div>;
```

## FAQ

### 为什么 Modal 关闭时，内容不会更新？

Modal 在关闭时会将内容进行 memo 从而避免关闭过程中的内容跳跃。也因此如果你在配合使用 Form 有关闭时重置 `initialValues` 的操作，请通过在 effect 中调用 `resetFields` 来重置。

### 如何关闭 Modal 动画？

你可以通过 `transitionName=""` 和 `maskTransitionName=""` 去除动画 CSS，但是需要注意的是。该方法为内部方法，我们不保证下个大版本重构时该属性会被保留。
