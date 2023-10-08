---
toc: content
title: Scrollbar（滚动条）
nav:
  title: 组件
group:
  title: 基础
demo:
  cols: 2
order: 2
---

# Scrollbar（滚动条）

重新定义滚动条样式。

## 代码演示

<code src="./basic.tsx">竖轴</code>
<code src="./wide.tsx">竖轴粗</code>
<code src="./hori.tsx">横轴</code>
<code src="./hori-wide.tsx">横轴粗</code>
<code src="./both.tsx">同时滚动</code>
<code src="./force-visible.tsx" description="您可以使用 `forcVisible` 选项强制使跟踪可见(与 overflow: roll 相同的行为) `forceVisible: true|'x'|'y'`">不隐藏</code>

## API

### Options

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| wide | 开启粗滚动 | boolean | false | |
| forceVisible | 不隐藏 | boolean \| x \| y | false | |
| clickOnTrack | 控制点击轨道的行为。 | boolean| true | |
| autoHide | 默认情况下，如果用户没有滚动，SimpleBar 会自动隐藏滚动条。您可以通过将 autoHide 选项设置为 false 使滚动条始终可见: | boolean| true | |
| direction | 定义方向 | `rtl` \| `ltr` | `ltr` | |
| scrollbarMinSize | 定义以像素为单位的最小滚动条大小。 | number | 25 | |
| scrollbarMaxSize | 定义以像素为单位的最大滚动条大小。 | number |  | |
