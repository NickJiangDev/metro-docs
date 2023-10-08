---
toc: content
title: Badge（徽标）
nav:
  title: 组件
group:
  title: 数据展示
demo:
  cols: 2
---

# Badge（徽标）

徽标一般出现在通知图标或头像的右上角，它分为小圆点/数字徽标

## 代码演示

<code src="./basic.tsx" description="简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 `showZero` 修改为显示。">基本</code>
<code src="./types.tsx" description="description: 提供三种不同的类型展示有 `dot`、`number - round`、`number`">status 状态</code>
<code src="./status.tsx" description="标记有 `default`、`processing`、`error`、`warning`、`success`、`disabled` 状态。">type 类型</code>
<code src="./overflow.tsx" description="超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。">封顶数字</code>
<code src="./offset.tsx" description="设置状态点的位置偏移，格式为 `[left, top]`，表示状态点距默认位置左侧、上方的偏移量。">自定义位置偏移</code>
<code src="./no-wrapper.tsx" description="不包裹任何元素即是独立使用，可自定样式展现。">独立使用</code>
<code src="./change.tsx" description="展示动态变化的效果。">动态</code>
<code src="./link.tsx" description="用 a 标签进行包裹即可。">可点击</code>
<code src="./size.tsx" description="可以设置有数字徽标的大小。">大小</code>
<code src="./status-text.tsx" description="用于表示状态的小圆点。">状态点</code>
<code src="./preset.tsx" description="我们添加了多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。">多彩徽标</code>
<code src="./ribbon.tsx">缎带</code>

## API

### Badge

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 自定义小圆点的颜色 | [PresetColors](#presetcolors) \| [StatusColor](#statuscolors) \| string | - |  |
| round | 是否需要设置圆角 | boolean | true |  |
| count | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | ReactNode | - |  |
| dot | 不展示数字，只有一个小红点 | boolean | false |  |
| offsetFromTopRight | 设置状态点的位置偏移 | \[number, number] | - |  |
| overflowCount | 展示封顶的数字值 | number | 99 |  |
| showZero | 当数值为 0 时，是否展示 Badge | boolean | false |  |
| size | 在设置了 `count` 的前提下有效，设置小圆点的大小 | `default` \| `small` | - |  |
| status | 设置 Badge 为状态点 | [StatusColor](#statuscolors) | `error` |
| text | 在设置了 `status` 的前提下有效，设置状态点的文本 | ReactNode | - |  |
| title | 设置鼠标放在状态点上时显示的文字 | string | - |  |

### Badge.Ribbon

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| color | 自定义缎带的颜色 | [PresetColors](#presetcolors) \| [StatusColor](#statuscolors) \| string | - |  |
| placement | 缎带的位置，`start` 和 `end` 随文字方向（RTL 或 LTR）变动 | `start` \| `end` | `end` |  |
| text | 缎带中填入的内容 | ReactNode | - |  |

### PresetColors

> type PresetColors = 'yellow' | 'lime' | 'green' | 'cyan' | 'violet' | 'purple' | 'pink'

### StatusColors

> type StatusColors = 'default' | 'primary' | 'processing' | 'error' | 'success' | 'warning' | 'disabled'
