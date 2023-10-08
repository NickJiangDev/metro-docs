---
toc: content
title: Popconfirm（气泡确认框）
nav:
  title: 组件
group:
  title: 反馈
demo:
  cols: 2
---

<style>
.popconfirm-position {
    .metro-btn {
margin-left: 8px;
  margin-right: 0;
  margin-bottom: 8px;
  width: 70px;
  text-align: center;
  padding: 0;
}
}
</style>

# Popconfirm（气泡确认框）

点击元素，弹出气泡式的确认框。

## 代码演示

<code src="./basic.tsx" description="最简单的用法，支持确认标题和描述。">基本</code>
<code src="./custom-btn.tsx" description="使用 `okText` 和 `cancelText` 自定义按钮文字。">自定义按钮文字</code>

<code src="./position.tsx" description="位置有十二个方向。如需箭头指向目标元素中心。">位置</code>

<code src="./action.tsx" description="可以判断是否需要弹出。">条件触发</code>
<code src="./sync.tsx" description="点击确定后异步关闭气泡确认框，例如提交表单。">异步关闭</code>
<code src="./promise.tsx" description="点击确定后异步关闭 Popconfirm，例如提交表单。">基于 Promise 的异步关闭</code>

## API

| 参数              | 说明                                   | 类型                               | 默认值    | 版本 |
| ----------------- | -------------------------------------- | ---------------------------------- | --------- | ---- |
| type              | 气泡框的类型                           | `info` `warning` `error` `success` | `warning` |      |
| cancelButtonProps | cancel 按钮 props                      |                                    | -         |      |
| cancelText        | 取消按钮文字                           | string                             | `取消`    |      |
| disabled          | 阻止点击 Popconfirm 子元素时弹出确认框 | boolean                            | false     |      |
| icon              | 自定义弹出气泡 Icon 图标               | ReactNode                          |           |      |
| okButtonProps     | ok 按钮 props                          |                                    | -         |      |
| okText            | 确认按钮文字                           | string                             | `确定`    |      |
| okType            | 确认按钮类型                           | string                             | `primary` |      |
| showCancel        | 是否显示取消按钮                       | boolean                            | true      |      |
| title             | 确认框标题                             | ReactNode \| () => ReactNode       | -         |      |
| description       | 确认内容的详细描述                     | ReactNode \| () => ReactNode       | -         |      |
| onCancel          | 点击取消的回调                         | function(e)                        | -         |      |
| onConfirm         | 点击确认的回调                         | function(e)                        | -         |      |

更多属性请参考 [Tooltip](/components/tooltip#共同的-api)。

## 注意

请确保 `Popconfirm` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
