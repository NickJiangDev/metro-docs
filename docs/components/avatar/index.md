---
toc: content
title: Avatar（头像）
nav:
  title: 组件
group:
  title: 数据展示
demo:
  cols: 2
---

# Avatar（头像）

用来代表用户或事物，支持图片、图标或字符展示。

## 代码演示

<code src="./size.tsx" description="头像有六种尺寸，两种形状可供选择 `xs`、`s`、`m`、`l`、`xl`、`xxl` \| `circle`、`squire`">尺寸&形状</code>
<code src="./type.tsx" description="支持三种类型：图片、Icon 以及字符">类型</code>

## API

:::info{title=注意}
你可以设置 `icon` 或 `children` 作为图片加载失败的默认 fallback 行为，优先级为 `icon` > `children`
:::

| 参数        | 说明                                                          | 类型                                         | 默认值   | 版本 |
| ----------- | ------------------------------------------------------------- | -------------------------------------------- | -------- | ---- |
| alt         | 图像无法显示时的替代文本                                      | string                                       | -        |      |
| icon        | 设置头像的自定义图标                                          | ReactNode                                    | -        |      |
| shape       | 指定头像的形状                                                | `circle` \| `square`                         | `circle` |      |
| size        | 设置头像的大小                                                | `xs` \| `s` \| `m`\|`l` \| `xl` \| `xxl`     | `s`      |      |
| noBorder    | 不要边框                                                      | boolean                                      | -        |      |
| src         | 图片类头像的资源地址或者图片元素                              | string \| ReactNode                          | -        |      |
| srcSet      | 设置图片类头像响应式资源地址                                  | string                                       | -        |      |
| draggable   | 图片是否允许拖动                                              | boolean \| `'true'` \| `'false'`             | -        |      |
| crossOrigin | CORS 属性设置                                                 | `'anonymous'` \| `'use-credentials'` \| `''` | -        |      |
| onError     | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean                                | -        |      |
