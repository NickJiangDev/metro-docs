---
toc: content
title: VirtualizedList（虚拟滚动）
nav:
  title: 组件
group:
  title: 数据展示
demo:
  cols: 2
---

# VirtualizedList（虚拟滚动）

展示行列数据的虚拟滚动列表。

## 代码演示

<code src="./basic.tsx" description="最基本的用法。">基本</code>
<code src="./horizontal.tsx" description="最基本的用法。">横向虚拟滚动</code>
<code src="./padding-margin.tsx" description="调整`padding`和`margin`。">内外间距</code>
<code src="./reverse.tsx" description="通过`mode=reverse`和`ref`达到反向渲染。">反向渲染</code>
<code src="./sticky.tsx" description="用法示例。">粘性头部</code>
<code src="./scroll-to.tsx" description="通过`ref`设置滚动目标和滚动的偏移量。">滚动设置</code>
<code src="./state.tsx" description="改变每一个item的状态，也不会影响虚拟渲染。">内容改变状态</code>
<code src="./custom-item.tsx" description="自定义`Item`和`Root`，如果使用自定义Root，滚动条还需自行安装。">自定义单元</code>

## API

### Props

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| children | 子元素 | ReactNode |  | |
| ref | 拿到实例 | [ListHandle](#listhandle) |  | |
| noRowsRenderer | children为空的渲染 | ReactNode | `<Empty />` | |
| overscan | 要在列表可见边界之上/之下呈现的项目数。可以增加以避免在快速滚动中显示空白项。 | number | 4 | | 
| initialItemSize | 未测量项的项大小提示 | number |  | |
| initialItemCount | 未测量项的项数量提示 | number | - | |
| horizontal | 水平虚拟滚动 | boolean |  | |
| mode | 模式 | `reverse` \| `rtl` |  | |
| components | 自定义滚动区域的根元素 | { Root?: [VirtualizedListWindowProps](#virtualizedlistwindowprops), Item?: [VirtualizedListItemProps](#virtualizedlistitemprops)} |  | |
| onScroll | 滚动监听 | (offset: number) => void |  | |
| onScrollStop | 停止滚动的回调 | () => void |  | |
| onRangeChange | 可见元素范围变更的回调 | `(payload: { start: number,end: number,count: number}) => void` | | |
| width | 列表宽度 | number \| string | | |
| height | 列表高度 | number \| string | 330 | |
| noBorder | 无边框 | boolean | | |

### VirtualizedlistItemviewProps

```js
interface VirtualizedListItemProps {
  style: CSSProperties;
  children: ReactNode;
}
```

### VirtualizedListWindowProps

```js
export interface VirtualizedListWindowProps {
  /**
   * Renderable item elements.
   */
  children: ReactNode;
  /**
   * Attributes that should be passed to the scrollable element.
   */
  attrs: WindowComponentAttributes;
  /**
   * Total height of items. It's undefined if component is not vertically scrollable.
   */
  height: number | undefined;
  /**
   * Total width of items. It's undefined if component is not horizontally scrollable.
   */
  width: number | undefined;
  /**
   * Currently component is scrolling or not.
   */
  scrolling: boolean;
}
```

### ListHandle

```js
export interface ListHandle {
    /**
     * Get current scrollTop or scrollLeft.
     */
    readonly scrollOffset: number;
    /**
     * Get current scrollHeight or scrollWidth.
     */
    readonly scrollSize: number;
    /**
     * Get current offsetHeight or offsetWidth.
     */
    readonly viewportSize: number;
    /**
     * Scroll to the item specified by index.
     * @param index index of item
     */
    scrollToIndex(index: number): void;
    /**
     * Scroll to the given offset.
     * @param offset offset from start
     */
    scrollTo(offset: number): void;
    /**
     * Scroll by the given offset.
     * @param offset offset from current position
     */
    scrollBy(offset: number): void;
}
```
