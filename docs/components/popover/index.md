---
toc: content
title: Popover（气泡框）
nav:
  title: 组件
group:
  title: 数据展示
  order: 4
demo:
  cols: 2
---

# Popover（气泡框）

点击/鼠标移入元素，弹出气泡式的卡片浮层。

<style>
.metro-btn {
margin-left: 8px;
  margin-right: 0;
  margin-bottom: 8px;
  width: 70px;
  text-align: center;
  padding: 0;
}
</style>

## 代码演示

<code src="./basic.tsx" description="最简单的用法，浮层的大小由内容区域决定。">基本使用</code>
<code src="./trigger.tsx" description="鼠标移入、聚集、点击。">三种触发方式</code>
<code src="./position.tsx" description="有十二个不同方向。">位置</code>

## API

| 参数    | 说明     | 类型                         | 默认值 | 版本 |
| ------- | -------- | ---------------------------- | ------ | ---- |
| content | 卡片内容 | ReactNode \| () => ReactNode | -      |      |
| title   | 卡片标题 | ReactNode \| () => ReactNode | -      |      |

:::info{title=注意}
请确保 `Popover` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
:::
