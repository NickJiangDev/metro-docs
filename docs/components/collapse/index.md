---
toc: content
title: Collapse（折叠面板）
nav:
  title: 组件
group:
  title: 数据展示
---

# Collapse（折叠面板）

可以折叠/展开的内容区域。

## 代码演示

<code src="./basic.tsx" description="可以同时展开多个面板，这个例子默认展开了第一个。">折叠面板</code>
<code src="./accordion.tsx" description="手风琴，每次只打开一个tab。">手风琴</code>
<code src="./mix.tsx" description="嵌套折叠面板。">嵌套</code>
<code src="./borderless.tsx" description="一套没有边框的简洁样式。">简洁风格</code>
<code src="./arrow.tsx" description="你可以通过 `showArrow={false}` 隐藏 `CollapsePanel` 组件的箭头图标。">隐藏箭头</code>
<code src="./extra.tsx" description="自定义渲染每个面板右上角的内容。">额外节点</code>
<code src="./ghost.tsx" description="将折叠面板的背景变成透明。">幽灵模式</code>
<code src="./collapsible.tsx" description="通过 `collapsible` 属性，可以设置面板的可折叠触发区域。">可折叠触发区域</code>

## API

### Collapse

| 参数                 | 说明                                     | 类型                                          | 默认值                                 | 版本 |
| -------------------- | ---------------------------------------- | --------------------------------------------- | -------------------------------------- | ---- |
| items                | 折叠项目内容                             | [ItemType](#items)                            | -                                      |      |
| accordion            | 手风琴模式                               | boolean                                       | false                                  |      |
| activeKey            | 当前激活 tab 面板的 key                  | string\[] \| string <br/> number\[] \| number | 默认无，accordion 模式下默认第一个元素 |      |
| bordered             | 带边框风格的折叠面板                     | boolean                                       | true                                   |      |
| collapsible          | 所有子面板是否可折叠或指定可折叠触发区域 | `header` \| `icon` \| `disabled`              | -                                      |      |
| defaultActiveKey     | 初始化选中面板的 key                     | string\[] \| string<br/> number\[] \| number  | -                                      |      |
| destroyInactivePanel | 销毁折叠隐藏的面板                       | boolean                                       | false                                  |      |
| expandIcon           | 自定义切换图标                           | (panelProps) => ReactNode                     | -                                      |      |
| expandIconPosition   | 设置图标位置                             | `start` \| `end`                              | -                                      |      |
| ghost                | 使折叠面板透明且无边框                   | boolean                                       | false                                  |      |
| size                 | 设置折叠面板大小                         | `large` \| `middle` \| `small`                | `middle`                               |      |
| onChange             | 切换面板的回调                           | function                                      | -                                      |      |

### Collapse.Panel

:::info
我们更推荐使用`items`的方式去配置面板，而不是`<Panel />`的方式
:::

| 参数        | 说明                                                               | 类型                             | 默认值 | 版本 |
| ----------- | ------------------------------------------------------------------ | -------------------------------- | ------ | ---- |
| collapsible | 是否可折叠或指定可折叠触发区域                                     | `header` \| `icon` \| `disabled` | -      |      |
| extra       | 自定义渲染每个面板右上角的内容                                     | ReactNode                        | -      |      |
| forceRender | 被隐藏时是否渲染 DOM 结构                                          | boolean                          | false  |      |
| header      | 面板头内容                                                         | ReactNode                        | -      |      |
| key         | 对应 activeKey                                                     | string \| number                 | -      |      |
| showArrow   | 是否展示当前面板上的箭头（为 false 时，collapsible 不能置为 icon） | boolean                          | true   |      |

### Items

| 参数        | 说明                                                               | 类型                             | 默认值 | 版本 |
| ----------- | ------------------------------------------------------------------ | -------------------------------- | ------ | ---- |
| key         | 对应 activeKey                                                     | string \| number                 | -      |      |
| label       | 面板头内容                                                         | ReactNode                        | -      |      |
| showArrow   | 是否展示当前面板上的箭头（为 false 时，collapsible 不能置为 icon） | boolean                          | true   |      |
| forceRender | 被隐藏时是否渲染 DOM 结构                                          | boolean                          | false  |      |
| extra       | 自定义渲染每个面板右上角的内容                                     | ReactNode \| string              | -      |      |
| collapsible | 是否可折叠或指定可折叠触发区域                                     | `header` \| `icon` \| `disabled` | -      |      |
