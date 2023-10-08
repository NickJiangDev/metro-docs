---
toc: content
title: Divider（分割线）
nav:
  title: 组件
group:
  title: 布局
demo:
  cols: 2
---

# Divider（分割线）

区隔内容的分割线。

## 代码演示

<code src="./horizontal.tsx" description="相默认为水平分割线。">水平分割线</code>
<code src="./text.tsx" description="分割线中带有文字，可以用 `orientation` 指定文字位置。">带文字的分割线</code>
<code src="./vertical.tsx" description="使用 `type='vertical'` 设置为行内的垂直分割线。">垂直分割线</code>

## API

| 参数              | 说明                                                                                            | 类型                          | 默认值       | 版本 |
| ----------------- | ----------------------------------------------------------------------------------------------- | ----------------------------- | ------------ | ---- |
| children          | 嵌套的标题                                                                                      | ReactNode                     | -            |      |
| className         | 分割线样式类                                                                                    | string                        | -            |      |
| dashed            | 是否虚线                                                                                        | boolean                       | false        |      |
| orientation       | 分割线标题的位置                                                                                | `left` \| `right` \| `center` | `center`     |      |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `orientation` 必须为 `left` 或 `right` | string \| number              | -            |      |
| style             | 分割线样式对象                                                                                  | CSSProperties                 | -            |      |
| type              | 水平还是垂直类型                                                                                | `horizontal` \| `vertical`    | `horizontal` |      |
