---
toc: content
title: Drawer（抽屉）
nav:
  title: 组件
group:
  title: 反馈
demo:
  cols: 2
---

# Drawer（抽屉）

抽屉是从屏幕边缘滑出的浮层面板。它有两种类型：浅灰色通常用于直接铺陈信息，深灰色则用于先叠加卡片后再添加信息。

## 代码演示

<code src="./basic.tsx" description="基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。">基础抽屉</code>
<code src="./type.tsx" description="分为默认类型和深灰色类型。">深灰色类型</code>
<code src="./position.tsx" description="自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。">自定义位置</code>
<code src="./more-drawer.tsx" description="在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。">多层抽屉</code>
<code src="./render-in-current.tsx" description="渲染在当前 dom 里。自定义容器，查看 getContainer。">渲染在当前 DOM</code>
<code src="./width.tsx" description="抽屉的默认宽度为 `378px`，另外还提供一个大号抽屉 `736px`，可以用 size 属性来设置。">预设宽度</code>
<code src="./operaters.tsx" description="通过`operatorTarget`来控制操作按钮的位置，可选`extra` `footer` 默认`footer`。">操作按钮的展示位置</code>
<code src="./footer.tsx" description="可以rerender Footer，或者不需要Footer。">自定义 footer</code>
<code src="./close-icon.tsx" description="蒙层不允许关闭，icon点击关闭">icon 关闭</code>

## API

| 参数                | 说明                                                                       | 类型                                                   | 默认值            | 版本 |
| ------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------- | ---- |
| type                | 深灰色模式                                                                 | dark-gray                                              |                   |      |
| autoFocus           | 抽屉展开后是否将焦点切换至其 Dom 节点                                      | boolean                                                | true              |      |
| afterOpenChange     | 切换抽屉时动画结束后的回调                                                 | function(open)                                         | -                 |      |
| bodyStyle           | 可用于设置 Drawer 内容部分的样式                                           | CSSProperties                                          | -                 |      |
| className           | Drawer 容器外层 className 设置，如果需要设置最外层，请使用 rootClassName   | string                                                 | -                 |      |
| closable            | 是否显示左上角的关闭按钮                                                   | boolean                                                | true              |      |
| closeIcon           | 自定义关闭图标                                                             | ReactNode                                              | &lt;Close />      |      |
| contentWrapperStyle | 可用于设置 Drawer 包裹内容部分的样式                                       | CSSProperties                                          | -                 |      |
| destroyOnClose      | 关闭时销毁 Drawer 里的子元素                                               | boolean                                                | false             |      |
| extra               | 抽屉右上角的操作区域                                                       | ReactNode                                              | -                 |      |
| footer              | 抽屉的页脚                                                                 | ReactNode                                              | -                 |      |
| footerStyle         | 抽屉页脚部件的样式                                                         | CSSProperties                                          | -                 |      |
| forceRender         | 预渲染 Drawer 内元素                                                       | boolean                                                | false             |      |
| getContainer        | 指定 Drawer 挂载的节点，**并在容器内展现**，`false` 为挂载在当前位置       | HTMLElement \| () => HTMLElement \| Selectors \| false | body              |      |
| headerStyle         | 用于设置 Drawer 头部的样式                                                 | CSSProperties                                          | -                 |      |
| height              | 高度, 在 `placement` 为 `top` 或 `bottom` 时使用                           | string \| number                                       | 378               |      |
| keyboard            | 是否支持键盘 esc 关闭                                                      | boolean                                                | true              |      |
| mask                | 是否展示遮罩                                                               | boolean                                                | true              |      |
| maskClosable        | 点击蒙层是否允许关闭                                                       | boolean                                                | true              |      |
| maskStyle           | 遮罩样式                                                                   | CSSProperties                                          | {}                |      |
| placement           | 抽屉的方向                                                                 | `top` \| `right` \| `bottom` \| `left`                 | `right`           |      |
| push                | 用于设置多层 Drawer 的推动行为                                             | boolean \| { distance: string \| number }              | { distance: 180 } |      |
| rootClassName       | 对话框外层容器的类名                                                       | string                                                 | -                 |      |
| rootStyle           | 可用于设置 Drawer 最外层容器的样式，和 `style` 的区别是作用节点包括 `mask` | CSSProperties                                          | -                 |      |
| size                | 预设抽屉宽度（或高度），default `378px` 和 large `736px`                   | 'default' \| 'large'                                   | 'default'         |      |
| style               | 设计 Drawer 容器样式，如果你只需要设置内容部分请使用 `bodyStyle`           | CSSProperties                                          | -                 |      |
| title               | 标题                                                                       | ReactNode                                              | -                 |      |
| open                | Drawer 是否可见                                                            | boolean                                                | -                 |
| width               | 宽度                                                                       | string \| number                                       | 378               |      |
| zIndex              | 设置 Drawer 的 `z-index`                                                   | number                                                 | 1000              |      |
| onClose             | 点击遮罩层或左上角叉或取消按钮的回调                                       | function(e)                                            | -                 |      |
| okButtonProps       | ok 按钮 props                                                              | ButtonProps                                            | -                 |      |
| okText              | 确认按钮文字                                                               | ReactNode                                              | `确定`            |      |
| okType              | 确认按钮类型                                                               | string                                                 | `primary`         |      |
| cancelButtonProps   | cancel 按钮 props                                                          | ButtonProps                                            | -                 |      |
| cancelText          | 取消按钮文字                                                               | ReactNode                                              | `取消`            |      |
| operatorTarget      | 操作栏的展示位置                                                           | `footer` \| `extra`                                    | `footer`          |      |
