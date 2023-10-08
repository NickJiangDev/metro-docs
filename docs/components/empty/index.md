---
toc: content
title: Empty（空状态）
nav:
  title: 组件
group:
  title: 基础
demo:
  cols: 2
order: 4
---

# Empty（空状态）

空状态时的展示占位图。

## 代码演示

<code src="./basic.tsx">基本</code>
<code src="./simple.tsx">选择图片</code>
<code src="./customize.tsx">自定义</code>

## API

| 参数        | 说明                                           | 类型          | 默认值                          | 版本 |
| ----------- | ---------------------------------------------- | ------------- | ------------------------------- | ---- |
| description | 自定义描述内容                                 | ReactNode     | -                               |      |
| image       | 设置显示图片，为 string 时表示自定义图片地址。 | ReactNode     | `Empty.PRESENTED_IMAGE_DEFAULT` |      |
| imageStyle  | 图片样式                                       | CSSProperties | -                               |      |
