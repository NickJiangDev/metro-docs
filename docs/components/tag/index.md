---
toc: content
title: Tag（标签）
nav:
  title: 组件
group:
  title: 数据展示
demo:
  cols: 2
---

# Tag（标签）

<code src="./basic.tsx" description="基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `onClose` 事件。">基本</code>
<code src="./round.tsx">round 模式</code>
<code src="./preset-custom.tsx" description="我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。">多彩标签</code>
<code src="./add-del.tsx" description="用数组生成一组标签，可以动态添加和删除。">动态添加和删除</code>
<code src="./checked.tsx" description="可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。">可选择标签</code>
<code src="./status.tsx" description="预设五种状态颜色，可以通过设置 color 为 `success`、 `primary`、`error`、`default`、`warning` 来代表不同的状态。">预设状态</code>
<code src="./type.tsx" description="预设两种状态颜色，`solid`和`light`，默认`solid`">预设类型</code>

## API

### Tag

| 参数      | 说明                                                       | 类型                                                                    | 默认值 | 版本 |
| --------- | ---------------------------------------------------------- | ----------------------------------------------------------------------- | ------ | ---- |
| closable  | 标签是否可以关闭（点击默认关闭）                           | boolean                                                                 | false  |      |
| closeIcon | 自定义关闭按钮                                             | ReactNode                                                               | -      |      |
| color     | 标签色                                                     | [PresetColors](#presetcolors) \| [StatusColor](#statuscolors) \| string | -      |      |
| icon      | 设置图标                                                   | ReactNode                                                               | -      |      |
| type      | 设置类型                                                   | solid \| light                                                          | solid  |      |
| round     | 圆角模式                                                   | boolean                                                                 | false  |      |
| onClose   | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e) => void                                                             | -      |      |

### PresetColors

> type PresetColors = 'yellow' | 'lime' | 'green' | 'cyan' | 'violet' | 'purple' | 'pink'

### StatusColors

> type StatusColors = 'primary' | 'processing' | 'error' | 'success' | 'warning'

### Tag.CheckableTag

| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| checked  | 设置标签的选中状态   | boolean           | false  |
| onChange | 点击标签时触发的回调 | (checked) => void | -      |
