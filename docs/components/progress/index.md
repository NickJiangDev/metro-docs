---
toc: content
title: Progress（进度条）
nav:
  title: 组件
group:
  title: 反馈
demo:
  cols: 2
---

# Progress（进度条）

展示操作的当前进度。

## 代码演示

<code src="./basic.tsx" description="标题只有在线性进度里使用。">基础使用</code>
<code src="./line.tsx" description="在线性里标题和百分比的不同展示。">线性展示</code>
<code src="./circle.tsx" description="圆形进度。">进度圈</code>
<code src="./size.tsx" description="适合放在较为狭窄的区域内。">小型进度条</code>
<code src="./size-circle.tsx" description="适合放在较为狭窄的区域内。">小型进度圈</code>
<code src="./run-line.tsx" description="动态展示线性变化。">动态展示</code>
<code src="./run-circle.tsx" description="动态展示线性变化。">动态展示</code>
<code src="./format-text.tsx" description="`format`指定格式">自定义文字格式</code>
<code src="./segment.tsx" description="标准的进度条。`type=circle|dashboard` 时不支持分段颜色。">分段进度条</code>
<code src="./dashborad.tsx" description="通过设置 `type=dashboard`，可以很方便地实现仪表盘样式的进度条。若想要修改缺口的角度，可以设置 `gapDegree` 为你想要的值。">仪表盘</code>
<code src="./gradient-line.tsx" description="`linear-gradient` 的封装。推荐只传两种颜色。">自定义进度条颜色</code>

## API

各类型共用的属性。

| 属性          | 说明                                                                     | 类型                                                                                                                          | 默认值                     | 版本 |
| ------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---- |
| format        | 内容的模板函数                                                           | function(percent, successPercent)                                                                                             | (percent) => percent + `%` | -    |
| title         | 进度条标题(仅限 line)                                                    | React.ReactNode                                                                                                               |                            | -    |
| percent       | 百分比                                                                   | number                                                                                                                        | 0                          | -    |
| showInfo      | 是否显示进度数值或状态图标                                               | boolean                                                                                                                       | true                       | -    |
| infoDirection | 进度数值或状态图标展示位置                                               | horizontal                                                                                                                    | vertical \| horizontal     | -    |
| status        | 状态，可选：`success` `exception` `normal` `warning` `active`(仅限 line) | string                                                                                                                        | -                          | -    |
| strokeColor   | 进度条的色彩                                                             | string                                                                                                                        | -                          | -    |
| strokeLinecap | 进度条的样式                                                             | `round` \| `butt` \| `square`，区别详见 [stroke-linecap](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) | `round`                    | -    |
| success       | 成功进度条相关配置                                                       | { percent: number, strokeColor: string }                                                                                      | -                          | -    |
| trailColor    | 未完成的分段的颜色                                                       | string                                                                                                                        | -                          | -    |
| type          | 类型，可选 `line` `circle` `dashboard`                                   | string                                                                                                                        | `line`                     | -    |
| size          | 进度条的尺寸                                                             | number \| \[number, number] \| "small" \| "default"                                                                           | "default"                  |      |

### `type="line"`

| 属性        | 说明                                                                  | 类型                                                | 默认值 | 版本 |
| ----------- | --------------------------------------------------------------------- | --------------------------------------------------- | ------ | ---- |
| steps       | 进度条总共步数                                                        | number                                              | -      | -    |
| strokeColor | 进度条的色彩，传入 object 时为渐变。当有 `steps` 时支持传入一个数组。 | string \| string[] \| { from: string; to: string; } | -      |      |

### `type="circle"`

| 属性        | 说明                                             | 类型             | 默认值 | 版本 |
| ----------- | ------------------------------------------------ | ---------------- | ------ | ---- |
| strokeColor | 圆形进度条线的色彩，传入 object 时为渐变         | string \| object | -      | -    |
| strokeWidth | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number           | 6      | -    |

### `type="dashboard"`

| 属性        | 说明                                               | 类型                                   | 默认值   | 版本 |
| ----------- | -------------------------------------------------- | -------------------------------------- | -------- | ---- |
| gapDegree   | 仪表盘进度条缺口角度，可取值 0 ~ 295               | number                                 | 75       | -    |
| gapPosition | 仪表盘进度条缺口位置                               | `top` \| `bottom` \| `left` \| `right` | `bottom` | -    |
| strokeWidth | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | number                                 | 6        | -    |
