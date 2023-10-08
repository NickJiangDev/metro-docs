---
toc: content
title: Result（结果）
nav:
  title: 组件
group:
  title: 反馈
demo:
  cols: 2
---

# Result（结果）

用于反馈一系列操作任务的处理结果。

## 代码演示

<code src="./success.tsx">Success</code>
<code src="./404.tsx">404</code>
<code src="./info.tsx">Info</code>
<code src="./500.tsx">500</code>
<code src="./warning.tsx">Warning</code>
<code src="./noContent.tsx">无内容</code>
<code src="./error.tsx">Error</code>
<code src="./noSearch.tsx">无搜索结果</code>
<code src="./customIcon.tsx">自定义 icon</code>

## API

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 操作区 | ReactNode | - |
| icon | 自定义 icon | ReactNode | - |
| status | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \|  `500` \| `noContent` \| `noSearch` | `info` |
| subTitle | subTitle 文字 | ReactNode | - |
| title | title 文字 | ReactNode | - |
