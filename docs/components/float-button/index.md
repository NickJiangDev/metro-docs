---
toc: content
title: FloatButton（悬浮按钮）
nav:
  title: 组件
group:
  title: 基础
demo:
  cols: 2
order: 2
---

# FloatButton（悬浮按钮）

无论浏览到何处都可以看见的按钮。

:::warning{title=注意}
当前 demo 采用了 iframe 的形式来展示组件，FloatButton 不同于其他组件，需要使用 iframe 来保证样式能独立在页面内渲染。
如需切换主题，可在切换后刷新页面确保 iframe 展示正常。
:::

## 代码演示

<!-- prettier-ignore -->
<code src="./basic.tsx" iframe="360" description="最简单的用法。">基本</code>
<code src="./type.tsx" iframe="360" description="通过 `type` 改变悬浮按钮的类型。">类型</code>
<code src="./shape.tsx" iframe="360" description="通过 `shape` 设置不同的形状。">形状</code>
<code src="./description.tsx" iframe="360" description="可以通过 `description` 设置文字内容。 仅当 `shape` 属性为 `square` 时支持。由于空间较小，推荐使用比较精简的双数文字。">描述</code>
<code src="./tooltip.tsx" iframe="360" description="设置 tooltip 属性，即可开启气泡卡片。">含有气泡卡片的悬浮按钮</code>
<code src="./group.tsx" iframe="360" description="按钮组合使用时，推荐使用 `FloatButton.Group`，并通过设置 `shape` 属性改变悬浮按钮组的形状。悬浮按钮组的 `shape` 会覆盖内部 `FloatButton` 的 `shape` 属性。">浮动按钮组</code>
<code src="./group-menu.tsx" iframe="360" description="设置 `trigger` 属性即可开启菜单模式。提供 `hover` 和 `click` 两种触发方式。">菜单模式</code>
<code src="./controlled.tsx" iframe="360" description="通过 `open` 设置组件为受控模式，需要配合 `trigger` 一起使用。">受控模式</code>
<code src="./back-top.tsx" iframe="360" description="返回页面顶部的操作按钮。">回到顶部</code>
<code src="./badge.tsx" iframe="360" description="右上角附带圆形徽标数字的悬浮按钮。">徽标数</code>

## API

### 共同的 API

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| icon | 自定义图标 | ReactNode | - |  |
| description | 文字及其它内容 | ReactNode | - |  |
| tooltip | 气泡卡片的内容 | ReactNode \| () => ReactNode | - |  |
| type | 设置按钮类型 | `default` \| `primary` | `default` |  |
| shape | 设置按钮形状 | `circle` \| `square` | `circle` |  |
| onClick | 点击按钮时的回调 | (event) => void | - |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| target | 相当于 a 标签的 target 属性，href 存在时生效 | string | - |  |
| badge | 带徽标数字的悬浮按钮（不支持 `status` 以及相关属性） | [BadgeProps](/components/badge#api) | - | |

### FloatButton.Group

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| shape | 设置包含的 FloatButton 按钮形状 | `circle` \| `square` | `circle` |  |
| trigger | 触发方式（有触发方式为菜单模式） | `click` \| `hover` | - |  |
| open | 受控展开，需配合 trigger 一起使用 | boolean | - |  |
| onOpenChange | 展开收起时的回调，需配合 trigger 一起使用 | (open: boolean) => void | - |  |

### FloatButton.BackTop

<!-- prettier-ignore -->
| 参数             | 说明                               | 类型              | 默认值       | 版本 |
| ---------------- | ---------------------------------- | ----------------- | ------------ | ---- |
| duration         | 回到顶部所需时间（ms）             | number            | 450          |      |
| target           | 设置需要监听其滚动事件的元素       | () => HTMLElement | () => window |      |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop | number            | 400          |      |
| onClick          | 点击按钮的回调函数                 | () => void        | -            |      |
