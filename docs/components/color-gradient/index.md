---
toc: content
title: ColorGradient （渐变滑动）
nav:
  title: 组件
group:
  title: 数据录入
demo:
  cols: 2
---

# ColorGradient

渐变色滑动型输入器。

## 代码演示

<code src="./basic.tsx">基本用法</code>

## API

```js
interface StopProps {
  offset: number;
  color: string;
}
```

| 参数           | 说明             | 类型                                  | 默认值 | 版本 |
| -------------- | ---------------- | ------------------------------------- | ------ | ---- |
| color          | 进度条颜色       | string                                |        |      |
| stops          | 点位颜色渐变     | StopProps[]                           |        |
| activeIndex    | 当前激活的点位   | number                                |        |      |
| onSelect       | 选择回调         | (idx: string, index?: number) => void |        |      |
| onChange       | 变化回调         | (stops: StopProps[]) => void          |        |      |
| onActiveChange | 激活状态变化回调 | (idx: number) => void                 |        |      |
