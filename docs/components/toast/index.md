---
toc: content
title: Toast（消息提示）
nav:
  title: 组件
group:
  title: 反馈
demo:
  cols: 2
---

# Toast（消息提示）

全局展示操作反馈信息。

## 代码演示

<code src="./basic.tsx" description="样式展示。">Container 展示</code>

<code src="./hooks.tsx" description="通过 `toastApi.useToast` 创建支持读取 `context` 的 `contextHolder`。">Hooks 调用</code>
<code src="./duration.tsx" description="自定义时长 `10s`, 默认时长为`3s`">修改延时</code>
<code src="./custom-style.tsx" description="使用 `style` 和 `className` 来定义样式。">自定义样式</code>
<code src="./promise.tsx" description="可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。">Promise 接口</code>
<code src="./update.tsx" description="可以通过唯一的 `key` 来更新内容。">更新消息内容</code>
<code src="./api.tsx" description="以`api`的方式直接调用">API 调用</code>
<code src="./api-simple.tsx" description="以`api`的方式直接调用">API 调用极简</code>

## API

组件提供了一些静态方法，使用方式和参数如下：

- `toastApi.success(config | string, duration)`
- `toastApi.error(config | string, duration)`
- `toastApi.info(config | string, duration)`
- `toastApi.warning(config | string, duration)`
- `toastApi.loading(config | string, duration)`

`config` 对象属性如下：

| 参数       | 说明                                        | 类型                          | 默认值 |
| ---------- | ------------------------------------------- | ----------------------------- | ------ |
| className  | 自定义 CSS class                            | string                        | -      |
| message    | 提示内容                                    | string                        | -      |
| buttonText | 按钮文案                                    | string                        | -      |
| key        | 当前提示的唯一标志                          | string \| number              | -      |
| style      | 自定义内联样式                              | CSSProperties                 | -      |
| onClick    | 点击 toastApi 时触发的回调函数              | (e: React.MouseEvent) => void | -      |
| onClose    | 关闭时触发的回调函数                        | () => void                    | -      |
| withArrow  | 箭头显示                                    | boolean                       | -      |
| withClose  | 关闭显示                                    | boolean                       | -      |
| duration   | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number                        | 3      |

## FAQ

### 为什么 toast 调用 API 方法不能获取 context、redux 的内容和 ConfigProvider 的 `getPopupContainer/theme` 等配置？

直接调用 toast 方法，metro 会通过 `ReactDOM.render` 动态创建新的 React 实体。其 context 与当前代码所在 context 并不相同，因而无法获取 context 信息。

当你需要 context 信息（例如 ConfigProvider 配置的内容）时，可以通过 `toastApi` 方法会返回 `api` 实体以及 `contextHolder` 节点。将其插入到你需要获取 context 位置即可。
