---
toc: content
title: Anchor（锚点）
nav:
  title: 组件
group:
  title: 配置组件
demo:
  cols: 2
---

# Anchor（锚点）

用于跳转到页面指定位置。

## 代码演示

<code src="./basic.tsx" descirption="最简单的用法。">基本</code>
<code src="./align-right.tsx" descirption="可以配置`align`, 默认在左侧。">展示在右侧</code>

<code src="./onClick.tsx">自定义 onClick 事件</code>

<code src="./customizeHighlight.tsx">自定义锚点高亮</code>

<code src="./onChange.tsx">监听锚点链接改变</code>

## API

### Anchor Props

| 成员             | 说明                                       | 类型                                                            | 默认值       | 版本 |
| ---------------- | ------------------------------------------ | --------------------------------------------------------------- | ------------ | ---- |
| affix            | 固定模式                                   | boolean                                                         | true         |      |
| bounds           | 锚点区域边界                               | number                                                          | 5            |      |
| getContainer     | 指定滚动的容器                             | () => HTMLElement                                               | () => window |      |
| getCurrentAnchor | 自定义高亮的锚点                           | (activeLink: string) => string                                  | -            |      |
| offsetTop        | 距离窗口顶部达到指定偏移量后触发           | number                                                          |              |      |
| showInkInFixed   | `affix={false}` 时是否显示小方块           | boolean                                                         | false        |      |
| targetOffset     | 锚点滚动偏移量，默认与 offsetTop 相同。    | number                                                          | -            |      |
| onChange         | 监听锚点链接改变                           | (currentActiveLink: string) => void                             | -            |      |
| onClick          | `click` 事件的 handler                     | (e: MouseEvent, link: object) => void                           | -            |      |
| items            | 数据化配置选项内容，支持通过 children 嵌套 | { key, href, title, target, children }\[] [具体见](#anchoritem) | -            |      |
| direction        | 设置导航方向                               | `vertical` \| `horizontal`                                      | `vertical`   |      |
| align            | 设置展示方向                               | `left` \| `right`                                               | `left`       |      |

### AnchorItem

| 成员     | 说明                                             | 类型                         | 默认值 | 版本 |
| -------- | ------------------------------------------------ | ---------------------------- | ------ | ---- |
| key      | 唯一标志                                         | string \| number             | -      |      |
| href     | 锚点链接                                         | string                       | -      |      |
| target   | 该属性指定在何处显示链接的资源                   | string                       | -      |      |
| title    | 文字内容                                         | ReactNode                    | -      |      |
| children | 嵌套的 Anchor Link，`注意：水平方向该属性不支持` | [AnchorItem](#anchoritem)\[] | -      |      |

### Link Props

建议使用 items 形式。

| 成员   | 说明                           | 类型      | 默认值 | 版本 |
| ------ | ------------------------------ | --------- | ------ | ---- |
| href   | 锚点链接                       | string    | -      |      |
| target | 该属性指定在何处显示链接的资源 | string    | -      |      |
| title  | 文字内容                       | ReactNode | -      |      |
