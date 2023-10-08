---
toc: content
title: CreateFilter（标准筛选器）
nav:
  title: 组件
group:
  title: 反馈
demo:
  cols: 2
---

# CreateFilter（标准筛选器）

可拖动的浮动展示容器。

## 代码演示

<code src="./basic.tsx">基础使用</code>
<code src="./loading.tsx" description="提供`loading`的样式。">Loading 状态</code>
<code src="./clickaway.tsx" description="点击区域外的任意地方关闭。">点击关闭</code>
<code src="./disabled.tsx" description="外层容器控制的禁用。">禁用状态</code>
<code src="./hide-footer.tsx">隐藏 Footer</code>

## API

| 参数                | 说明                               | 类型                                         | 默认值   | 版本 |
| ------------------- | ---------------------------------- | -------------------------------------------- | -------- | ---- |
| className           | 类名                               | `string`                                     | -        |      |
| showFooter          | 显示底部布局                       | `boolean`                                    | `true`   |      |
| footerClassName     | 底部布局的类名                     | `string`                                     | -        |      |
| footerPrefixEl      | 底部布局的前置元素                 | `() => React.ReactNode`                      | -        |      |
| loading             | 加载样式                           | `boolean`                                    | -        |      |
| extra               | 预留的可操作区域                   | `React.ReactNode`                            | -        |      |
| children            | 子元素                             | `React.ReactNode`                            | -        |      |
| onOk                | 确定按钮的回调                     | `() => void`                                 | -        |      |
| onClose             | 取消按钮的回调                     | `() => void`                                 | -        |      |
| okButtonLabel       | 确定按钮的文案                     | `React.ReactNode`                            | `确定`   |      |
| okButtonProps       | 确定按钮的属性                     | `FilterButtonProps`                          | -        |      |
| cancelButtonLabel   | 取消按钮的文案                     | `React.ReactNode`                            | `取消`   |      |
| cancelButtonProps   | 取消按钮的属性                     | `FilterButtonProps`                          | -        |      |
| overlay             | 显示的内容                         | `(() => React.ReactNode) \| React.ReactNode` | -        |      |
| clickAway           | 任意点击关闭                       | `boolean`                                    | -        |      |
| overlayStyle        | 内容的样式                         | `React.CSSProperties`                        | -        |      |
| overlayClassName    | 内容的类名                         | `string`                                     | -        |      |
| getPopupContainer   | 菜单渲染父节点。默认渲染到 body 上 | `(triggerNode: HTMLElement) => HTMLElement`  | -        |      |
| width               | 当前宽度                           | `string \| number`                           | -        |      |
| height              | 当前高度                           | `string \| number`                           | -        |      |
| placement           | 气泡框位置                         | `TooltipPlacement`                           | `bottom` |      |
| otherContainerStyle | -                                  | `React.CSSProperties`                        | -        |      |
| leftResizable       | -                                  | `boolean`                                    | -        |      |
| overlayMinWidth     | 内容的最小宽度                     | `number`                                     | -        |      |
| onVisibleChange     | 当前气泡框的显隐回调               | `(visible: boolean) => void`                 | -        |      |
| afterVisibleChange  | 显示隐藏后的回调                   | `() => void`                                 | -        |      |
| onToggleVisible     | 触发元素控制气泡的显示隐藏         | `(val: boolean) => void`                     | -        |      |
| disabled            | 失效状态                           | `boolean`                                    | -        |      |
| prefixCls           | -                                  | `string`                                     | -        |      |
