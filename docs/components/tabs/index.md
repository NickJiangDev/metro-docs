---
toc: content
title: Tabs（标签页）
nav:
  title: 组件
group:
  title: 数据展示
---

# Tabs（标签页）

选项卡切换组件。

## 代码演示

<code src="./basic.tsx" description="默认选中第一项。">基本用法</code>
<code src="./fillParent.tsx" description="`fillParent`可以使Tabs组件撑满父容器。">撑满父容器</code>
<code src="./disabled.tsx" description="禁用某一项。">禁用</code>
<code src="./centered.tsx" description="标签居中展示。">居中</code>
<code src="./icon.tsx" description="有图标的标签。">图标</code>
<code src="./slide.tsx" description="可以左右、上下滑动，容纳更多标签。">滑动</code>
<code src="./extra.tsx" description="可以在页签量变添加附加操作。">附加内容</code>
<code src="./size.tsx" description="大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。">大小</code>
<code src="./position.tsx" description="有四个位置，`tabPosition=left|right|top|bottom`。在移动端下，`left|right` 会自动切换成 `top`。可隐藏轨道，游标位置也可调整。">位置</code>
<code src="./text.tsx" description="另一种样式的页签，不提供对应的垂直样式。">文本式页签</code>
<code src="./card.tsx" description="另一种样式的页签，不提供对应的垂直样式。">卡片式页签</code>
<code src="./addCard.tsx" description="只有卡片样式的页签支持新增和关闭选项。使用 `closable={false}` 禁止关闭。">新增和关闭页签。</code>
<code src="./customAddAction.tsx" description="隐藏默认的页签增加图标，给自定义触发器绑定事件。">自定义新增页签触发器</code>

## API

### Tabs

| 参数                   | 说明                                                            | 类型                                                                                   | 默认值                           | 版本 |
| ---------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| activeKey              | 当前激活 tab 面板的 key                                         | string                                                                                 | -                                |      |
| addIcon                | 自定义添加按钮                                                  | ReactNode                                                                              | -                                |      |
| animated               | 是否使用动画切换 Tabs, 仅生效于 `tabPosition="top"`             | boolean\| { inkBar: boolean, tabPane: boolean }                                        | { inkBar: true, tabPane: false } |      |
| centered               | 标签居中展示                                                    | boolean                                                                                | false                            |      |
| defaultActiveKey       | 初始化选中面板的 key，如果没有设置 activeKey                    | string                                                                                 | `第一个面板`                     |      |
| hideAdd                | 是否隐藏加号图标，在 `type="editable-card"` 时有效              | boolean                                                                                | false                            |      |
| items                  | 配置选项卡内容                                                  | [TabItemType](#tabitemtype)                                                            | []                               |      |
| moreIcon               | 自定义折叠 icon                                                 | ReactNode                                                                              | &lt;EllipsisOutlined />          |      |
| popupClassName         | 更多菜单的 `className`                                          | string                                                                                 | -                                |      |
| renderTabBar           | 替换 TabBar，用于二次封装标签头                                 | (props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement | -                                |      |
| size                   | 大小，提供 `large` `middle` 和 `small` 三种大小                 | string                                                                                 | `middle`                         |      |
| tabBarExtraContent     | tab bar 上额外的元素                                            | ReactNode \| {left?: ReactNode, right?: ReactNode}                                     | -                                |      |
| tabBarGutter           | tabs 之间的间隙                                                 | number                                                                                 | -                                |      |
| tabBarStyle            | tab bar 的样式对象                                              | CSSProperties                                                                          | -                                |      |
| tabPosition            | 页签位置，可选值有 `top` `right` `bottom` `left`                | string                                                                                 | `top`                            |      |
| barPosition            | 游标位置，可选值有 `top` `right` `bottom` `left`                | string                                                                                 |                                  |      |
| hideTrack              | 是否隐藏轨道                                                    | boolean                                                                                |                                  |      |
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构                                       | boolean                                                                                | false                            |      |
| type                   | 页签的基本样式，可选 `line`、`card` `editable-card` `text` 类型 | string                                                                                 | `line`                           |      |
| onChange               | 切换面板的回调                                                  | function(activeKey) {}                                                                 | -                                |      |
| onEdit                 | 新增和删除页签的回调，在 `type="editable-card"` 时有效          | (action === 'add' ? event : targetKey, action): void                                   | -                                |      |
| onTabClick             | tab 被点击的回调                                                | function(key: string, event: MouseEvent)                                               | -                                |      |
| onTabScroll            | tab 滚动时触发                                                  | function({ direction: `left` \| `right` \| `top` \| `bottom` })                        | -                                |      |
| fillParent             | 是否撑满父容器                                                  | boolean                                                                                | -                                |      |

### TabItemType

| 参数        | 说明                                            | 类型      | 默认值 |
| ----------- | ----------------------------------------------- | --------- | ------ |
| closeIcon   | 自定义关闭图标，`在 type="editable-card"`时有效 | ReactNode | -      |
| disabled    | 禁用某一项                                      | boolean   | false  |
| forceRender | 被隐藏时是否渲染 DOM 结构                       | boolean   | false  |
| key         | 对应 activeKey                                  | string    | -      |
| label       | 选项卡头显示文字                                | ReactNode | -      |
| children    | 选项卡头显示内容                                | ReactNode | -      |
