---
toc: content
title: Affix（固钉）
nav:
  title: 组件
group:
  title: 配置组件
demo:
  cols: 2
---

# Affix（固钉）

将页面元素钉在可视范围。

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 代码演示

<code src="./basic.tsx" descirption="最简单的用法。">基本</code>
<code src="./on-change.tsx" description="可以获得是否固定的状态。">固定状态改变的回调</code>
<code src="./target.tsx" description="用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。">滚动容器</code>

## API

| 成员         | 说明                                                                   | 类型                        | 默认值       |
| ------------ | ---------------------------------------------------------------------- | --------------------------- | ------------ |
| offsetBottom | 距离窗口底部达到指定偏移量后触发                                       | number                      | -            |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发                                       | number                      | 0            |
| target       | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement           | () => window |
| onChange     | 固定状态改变时触发的回调函数                                           | (affixed?: boolean) => void | -            |

**注意：**`Affix` 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 `Affix` 为绝对定位：

```js
<Affix style={{ position: 'absolute', top: y, left: x }}>...</Affix>
```

## FAQ

### Affix 使用 `target` 绑定容器时，元素会跑到容器外。

从性能角度考虑，我们只监听容器滚动事件。如果希望任意滚动，你可以在窗体添加滚动监听。

### Affix 在水平滚动容器中使用时， 元素 `left` 位置不正确。

Affix 一般只适用于单向滚动的区域，只支持在垂直滚动容器中使用。如果希望在水平容器中使用，你可以考虑使用 原生 `position: sticky` 实现。