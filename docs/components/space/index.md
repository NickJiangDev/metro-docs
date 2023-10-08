---
toc: content
title: Space（间距）
nav:
  title: 组件
group:
  title: 布局
  order: 2
demo:
  cols: 2
---

# Space（间距）

设置组件之间的间距。

## 代码演示

<code src="./basic.tsx" description="相邻组件水平间距。">基本用法</code>
<code src="./vertical.tsx" description="相邻组件垂直间距。">垂直间距</code>
<code src="./split.tsx" description="相邻组件分隔符。">分隔符</code>

<code src="./align.tsx" description="设置对齐模式。">对齐</code>

<code src="./wrap.tsx" description="自动换行。">自动换行</code>

## API

### Space

| 参数      | 说明                                   | 类型                                     | 默认值       | 版本 |
| --------- | -------------------------------------- | ---------------------------------------- | ------------ | ---- |
| align     | 对齐方式                               | `start` \| `end` \|`center` \|`baseline` | -            |      |
| direction | 间距方向                               | `vertical` \| `horizontal`               | `horizontal` |      |
| size      | 间距大小                               | [Size](#size) \| [Size\[\]](#size)       | `middle`     |      |
| split     | 设置拆分                               | ReactNode                                | -            |      |
| wrap      | 是否自动换行，仅在 `horizontal` 时有效 | boolean                                  | false        |      |

### Size

`'small' | 'middle' | 'large' | number`
