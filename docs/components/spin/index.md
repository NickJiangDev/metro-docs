---
toc: content
title: Spin（加载）
nav:
  title: 组件
group:
  title: 反馈
  order: 6
demo:
  cols: 2
---

# Spin（加载）

用于页面和区块的加载中状态。

## 代码演示

<code src="./basic.tsx" description="一个简单的 loading 状态。">基本用法</code>
<code src="./brand.tsx">brand 模式</code>
<code src="./size.tsx" description="小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。">尺寸</code>
<code src="./container.tsx" description="放入一个容器中。">容器</code>
<code src="./fillParent.tsx" description="`fillParent`可以撑满父容器。">撑满父容器</code>
<code src="./wrap.tsx" description="包裹容器。">包裹</code>
<code src="./tip.tsx">自定义描述文案</code>

## API

| 参数             | 说明                                        | 类型          | 默认值   | 版本 |
| ---------------- | ------------------------------------------- | ------------- | -------- | ---- |
| delay            | 延迟显示加载效果的时间（防止闪烁）          | number (毫秒) | -        |      |
| brand            | 另一种加载中的样式                          | boolean       | false    |      |
| size             | 组件大小，可选值为 `small` `middle` `large` | string        | `middle` |      |
| spinning         | 是否为加载中状态                            | boolean       | true     |      |
| tip              | 当作为包裹元素时，可以自定义描述文案        | ReactNode     | -        |      |
| wrapperClassName | 包装器的类属性                              | string        | -        |      |
| fillParent       | 开启后可撑满父容器                          | boolean       | -        |      |
