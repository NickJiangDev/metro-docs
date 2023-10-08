---
toc: content
title: Watermark（水印）
nav:
  title: 组件
group:
  title: 反馈
---

# Watermark（水印）

给页面的某个区域加上水印。

## 代码演示

<code src="./basic.tsx" description="最简单的用法。">基础</code>
<code src="./muti-line.tsx" description="通过 `content` 设置 字符串数组 指定多行文字水印内容。">多行水印</code>
<code src="./image.tsx" description="通过 `image` 指定图片地址。为保证图片高清且不被拉伸，请设置 width 和 height, 并上传至少两倍的宽高的 logo 图片地址。">图片水印</code>

## API

| 参数    | 说明                                                        | 类型               | 默认值                     | 版本 |
| ------- | ----------------------------------------------------------- | ------------------ | -------------------------- | ---- |
| width   | 水印的宽度，`content` 的默认值为自身的宽度                  | number             | 120                        |      |
| height  | 水印的高度，`content` 的默认值为自身的高度                  | number             | 64                         |      |
| rotate  | 水印绘制时，旋转的角度，单位 `°`                            | number             | -22                        |      |
| zIndex  | 追加的水印元素的 z-index                                    | number             | 9                          |      |
| image   | 图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式) | string             | -                          |      |
| content | 水印文字内容                                                | string \| string[] | -                          |      |
| font    | 文字样式                                                    | [Font](#font)      | [Font](#font)              |      |
| gap     | 水印之间的间距                                              | \[number, number\] | \[100, 100\]               |      |
| offset  | 水印距离容器左上角的偏移量，默认为 `gap/2`                  | \[number, number\] | \[gap\[0\]/2, gap\[1\]/2\] |      |

### Font

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 字体颜色 | string | rgba(141,141,141,.25) |  |
| fontSize | 字体大小 | number | 14 |  |
| fontWeight | 字体粗细 | `normal` \| `light` \| `weight` \| number | normal |  |
| fontFamily | 字体类型 | string | sans-serif |  |
| fontStyle | 字体样式 | `none` \| `normal` \| `italic` \| `oblique` | normal |  |

## FAQ

### 处理异常图片水印

当使用图片水印且图片加载异常时，可以同时添加 `content` 防止水印失效

```js
<Watermark
  height={30}
  width={130}
  content="Metro Design"
  image="https://xxxxxxxxxx.com"
>
  <div style={{ height: 500 }} />
</Watermark>
```
