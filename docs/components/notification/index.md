---
toc: content
title: Notification (通知提示框)
nav:
  title: 组件
group:
  title: 反馈
demo:
  cols: 2
---

# Notification (通知提示框)

全局展示通知提醒信息。

## 代码演示

<code src="./container.tsx" description="面板展示">展示</code>

<code src="./container-btn.tsx" description="面板展示">展示按钮样式</code>

<code src="./container-btn-hori.tsx" description="面板展示，`description` 会收缩为一行，操作`btn`在右侧展示，同时会关掉右上角的关闭按钮。">展示右侧按钮样式</code>

<code src="./basic.tsx" description="通过 `notification.useNotification` 创建支持读取 `context` 的 `contextHolder`。">Hooks 调用</code>
<code src="./status.tsx" description="`success` `info` `warning` `error`四种状态">状态</code>
<code src="./duration.tsx" description="自定义通知框自动关闭的延时，默认 `4.5s`，取消自动关闭只要将该值设为 `0` 即可。">自动延时和关闭</code>
<code src="./custom-btn.tsx" description="自定义关闭按钮的样式和文字。">自定义按钮</code>
<code src="./custom-btn-hori.tsx" description="自定义关闭按钮的样式和文字。">自定义按钮的右侧展示</code>
<code src="./custom-style.tsx" description="使用 style 和 className 来定义样式。">自定义样式</code>
<code src="./update.tsx" description="可以通过唯一的 `key` 来更新内容。">更新消息内容</code>
<code src="./position.tsx" description="使用 `placement` 可以配置通知从右上角、右下角、左下角、左上角弹出。">弹出位置</code>
<code src="./api.tsx" description="静态方法无法消费 Context，推荐优先使用 Hooks 版本。">api 调用</code>

## API

- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`
- `notification.open(config)`
- `notification.destroy(key?: String)`

config 参数如下：

| 参数         | 说明                                                                                                                                                                                                                                                                               | 类型                                                                                                                                          | 默认值     | 版本 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---- |
| btn          | 自定义关闭按钮                                                                                                                                                                                                                                                                     | ReactNode                                                                                                                                     | -          | -    |
| btnDirection | 自定义关闭按钮的位置，如果为`right`建议设置 closable 为 false                                                                                                                                                                                                                      | bottom \| right                                                                                                                               | bottom     | -    |
| className    | 自定义 CSS class                                                                                                                                                                                                                                                                   | string                                                                                                                                        | -          | -    |
| closeIcon    | 自定义关闭图标                                                                                                                                                                                                                                                                     | ReactNode                                                                                                                                     | -          | -    |
| description  | 通知提醒内容，必选                                                                                                                                                                                                                                                                 | ReactNode                                                                                                                                     | -          | -    |
| duration     | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭                                                                                                                                                                                                                                    | number                                                                                                                                        | 4.5        | -    |
| icon         | 自定义图标                                                                                                                                                                                                                                                                         | ReactNode                                                                                                                                     | -          | -    |
| key          | 当前通知唯一标志                                                                                                                                                                                                                                                                   | string                                                                                                                                        | -          | -    |
| message      | 通知提醒标题，必选                                                                                                                                                                                                                                                                 | ReactNode                                                                                                                                     | -          | -    |
| placement    | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight`                                                                                                                                                                                                                     | string                                                                                                                                        | `topRight` | -    |
| style        | 自定义内联样式                                                                                                                                                                                                                                                                     | [CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | -          | -    |
| role         | 供屏幕阅读器识别的通知内容语义，默认为 `alert`。此情况下屏幕阅读器会立即打断当前正在阅读的其他内容，转而阅读通知内容                                                                                                                                                               | `alert \| status`                                                                                                                             | `alert`    |      |
| onClick      | 点击通知时触发的回调函数                                                                                                                                                                                                                                                           | function                                                                                                                                      | -          | -    |
| onClose      | 当通知关闭时触发                                                                                                                                                                                                                                                                   | function                                                                                                                                      | -          | -    |
| props        | 透传至通知 `div` 上的 props 对象，支持传入 `data-*` `aria-*` 或 `role` 作为对象的属性。需要注意的是，虽然在 TypeScript 类型中声明的类型支持传入 `data-*` 作为对象的属性，但目前只允许传入 `data-testid` 作为对象的属性。 详见 https://github.com/microsoft/TypeScript/issues/28960 | Object                                                                                                                                        | -          | -    |

- `notification.useNotification(config)`

config 参数如下：

| 参数         | 说明                                                                          | 类型           | 默认值              | 版本 |
| ------------ | ----------------------------------------------------------------------------- | -------------- | ------------------- | ---- |
| bottom       | 消息从底部弹出时，距离底部的位置，单位像素                                    | number         | 24                  |      |
| closeIcon    | 自定义关闭图标                                                                | ReactNode      | -                   |      |
| getContainer | 配置渲染节点的输出位置，但依旧为全屏展示                                      | () => HTMLNode | () => document.body |      |
| placement    | 弹出位置，可选 `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | string         | `topRight`          |      |
| top          | 消息从顶部弹出时，距离顶部的位置，单位像素                                    | number         | 24                  |      |
| maxCount     | 最大显示数, 超过限制时，最早的消息会被自动关闭                                | number         | -                   |      |
| closable     | 展示关闭按钮                                                                  | boolean        | -                   |      |

#### notification.config

| 参数         | 说明                                                                          | 类型           | 默认值              | 版本 |
| ------------ | ----------------------------------------------------------------------------- | -------------- | ------------------- | ---- |
| bottom       | 消息从底部弹出时，距离底部的位置，单位像素                                    | number         | 24                  |      |
| closeIcon    | 自定义关闭图标                                                                | ReactNode      | -                   |      |
| duration     | 默认自动关闭延时，单位秒                                                      | number         | 4.5                 |      |
| getContainer | 配置渲染节点的输出位置，但依旧为全屏展示                                      | () => HTMLNode | () => document.body |      |
| placement    | 弹出位置，可选 `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | string         | `topRight`          |      |
| top          | 消息从顶部弹出时，距离顶部的位置，单位像素                                    | number         | 24                  |      |
| maxCount     | 最大显示数, 超过限制时，最早的消息会被自动关闭                                | number         | -                   |      |
