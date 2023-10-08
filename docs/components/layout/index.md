---
toc: content
title: Layout（布局）
nav:
  title: 组件
group:
  title: 布局
  order: 3
---

# Layout（布局）

协助进行页面级整体布局。

## 组件概述

Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。

Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

> 注意：采用 flex 布局实现，请注意[浏览器兼容性](http://caniuse.com/#search=flex)问题。

## 代码演示

<code src="./basic.tsx" description="典型的页面布局。">基本用法</code>
<code src="./top.tsx" compact background="grey" description="最基本的『上-中-下』布局。
一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。">上中下布局</code>
<code src="./top-side-2.tsx" compact background="grey" description="同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。">顶部-侧边布局-通栏</code>
<code src="./top-side.tsx" compact background="grey" description="拥有顶部导航及侧边栏的页面，多用于展示类网站。">顶部-侧边布局</code>
<code src="./custom-trigger.tsx" compact background="grey" description="要使用自定义触发器，可以设置 trigger={null} 来隐藏默认设定。">自定义触发器</code>
<code src="./fixed.tsx" description="一般用于固定顶部导航，方便页面切换。" compact>固定头部</code>
<code src="./fixed-sider.tsx" description="当内容较长时，使用固定侧边栏可以提供更好的体验。" transform="true" compact>固钉侧边栏</code>

## API

```js
<Layout>
  <Header>header</Header>
  <Layout>
    <Sider>left sidebar</Sider>
    <Content>main content</Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <Footer>footer</Footer>
</Layout>
```

### Layout

布局容器。

| 参数      | 说明                                                               | 类型          | 默认值 |
| --------- | ------------------------------------------------------------------ | ------------- | ------ |
| className | 容器 className                                                     | string        | -      |
| hasSider  | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean       | -      |
| style     | 指定样式                                                           | CSSProperties | -      |

### Layout.Sider

侧边栏。

| 参数                  | 说明                                                                 | 类型                                          | 默认值 |
| --------------------- | -------------------------------------------------------------------- | --------------------------------------------- | ------ |
| breakpoint            | 触发响应式布局的断点                                                 | `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` | -      |
| className             | 容器 className                                                       | string                                        | -      |
| collapsed             | 当前收起状态                                                         | boolean                                       | -      |
| collapsedWidth        | 收缩宽度，设置为 0 会出现特殊 trigger                                | number                                        | 80     |
| collapsible           | 是否可收起                                                           | boolean                                       | false  |
| defaultCollapsed      | 是否默认收起                                                         | boolean                                       | false  |
| reverseArrow          | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用                    | boolean                                       | false  |
| style                 | 指定样式                                                             | CSSProperties                                 | -      |
| trigger               | 自定义 trigger，设置为 null 时隐藏 trigger                           | ReactNode                                     | -      |
| width                 | 宽度                                                                 | number \| string                              | 200    |
| zeroWidthTriggerStyle | 指定当 `collapsedWidth` 为 0 时出现的特殊 trigger 的样式             | object                                        | -      |
| onBreakpoint          | 触发响应式布局断点时的回调                                           | (broken) => {}                                | -      |
| onCollapse            | 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发 | (collapsed, type) => {}                       | -      |

#### breakpoint width

```js
{
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}
```
