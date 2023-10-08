---
toc: content
title: Grid（栅格）
nav:
  title: 组件
group:
  title: 布局
---

# Grid（栅格）

从堆叠到水平排列，协助进行页面级整体布局。
使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有 Col 必须放在 Row 内。
布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。

## 代码演示

<!-- prettier-ignore -->
<code src="./basic.tsx" description="从堆叠到水平排列。使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。">基础栅格</code>

<code src="./gutter.tsx" description="栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔(n 是自然数)。如果要支持响应式，可以写成 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。如果需要垂直间距，可以写成数组形式 `[水平间距, 垂直间距]` `[16, { xs: 8, sm: 16, md: 24, lg: 32 }]`。">区块间隔</code>

<code src="./offset.tsx" description="列偏移。使用 offset 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。">左右偏移</code>

<code src="./sort.tsx" description="列排序。通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。">栅格排序</code>

<code src="./flex.tsx" description="布局基础。子元素根据不同的值 `start`、`center`、`end`、`space-between`、`space-around`` 和 `space-evenly`，分别定义其在父节点里面的排版方式。">排版</code>

<code src="./flex-align.tsx" description="子元素垂直对齐。">对齐</code>

<code src="./order.tsx" description="通过 `order` 来改变元素的排序。">排序</code>

<code src="./flex-stretch.tsx" description="Col 提供 `flex` 属性以支持填充。">Flex 填充</code>

<code src="./responsive.tsx" description="参照 Bootstrap 的 响应式设计，预设六个响应尺寸：`xs` `sm` `md` `lg` `xl` `xxl`。">响应式布局</code>

<code src="./responsive-more.tsx" description="`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` `xl` `xxl` 属性中来使用。其中 xs={6} 相当于 xs={{ span: 6 }}。">其他属性的响应式</code>

<code src="./playground.tsx" description="可以简单配置几种等分栅格和间距。">栅格配置器</code>

<code src="./use-breakpoint.tsx" description="使用`useBreakpoint`个性化布局。">useBreakpoint Hook</code>

## API

### Row

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 垂直对齐方式 | `top` \| `middle` \| `bottom` \| `stretch` \| `{[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'top' \| 'middle' \| 'bottom' \| 'stretch'}` | `top` |  |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | number \| object \| array | 0 |  |
| justify | 水平排列方式 | `start` \| `end` \| `center` \| `space-around` \| `space-between` \| `space-evenly` \| `{[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'}` | `start` |  |
| wrap | 是否自动换行 | boolean | true |  |

### Col

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| flex | flex 布局属性 | string \| number | - |  |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number | 0 |  |
| order | 栅格顺序 | number | 0 |  |
| pull | 栅格向左移动格数 | number | 0 |  |
| push | 栅格向右移动格数 | number | 0 |  |
| span | 栅格占位格数，为 0 时相当于 `display: none` | number | - |  |
| xs | `屏幕 < 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| sm | `屏幕 ≥ 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| md | `屏幕 ≥ 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| lg | `屏幕 ≥ 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| xl | `屏幕 ≥ 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
| xxl | `屏幕 ≥ 1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |  |
