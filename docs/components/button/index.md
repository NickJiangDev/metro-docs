---
toc: content
title: Button（按钮）
nav:
  title: 组件
  order: 4
group:
  title: 基础
demo:
  cols: 2
order: 1
---

# Button（按钮）

按钮用来触发一些操作。

## 代码演示

<code src="./type.tsx" description="提供两种不同的类型展示有 `primary`、`ghost`">Type 类型</code>
<code src="./status.tsx" description="提供两种不通的状态`danger` `success`,不同的`type类型`对应不同的状态">Status 状态</code>
<code src="./loading.tsx" description="添加 `loading` 属性即可让按钮处于加载状态。">加载中状态</code>
<code src="./size.tsx" description="提供三种不同的大小有 `small`、`middle`、`large`">Size 大小</code>
<code src="./block.tsx" description="`block` 属性将使按钮适合其父宽度。">Block 按钮</code>
<code src="./focus.tsx" description="要我一直`focus`吗？">设置聚焦</code>
<code src="./icon.tsx" description="`icon`接收一个组件，并且可以选择图标出现在左还是右">带有 Icon 的按钮</code>
<code src="./icon-dropdown.tsx" description="button的`dropdown`样式">dropdown 模式</code>

<code src="./disabled.tsx" description="添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。">不可用状态</code>

<code src="./link.tsx" description="`Button.Link`提供一个文字Button">Button.Link</code>
<code src="./check.tsx" description="`Button.Check`提供一个可选择的Button">Button.Check</code>
<code src="./group.tsx" description="`Button.Group`提供Button组合展示形式">Button.Group</code>
<code src="./only-icon.tsx" description="`onlyIcon`属性会让Button更加聚焦与Icon的展示">只有 Icon 的按钮</code>
<code src="./tooltip.tsx" description="通过`showTooltip`控制tooltip的显示">增加 tooltip 提示</code>

## API

| 属性          | 说明                                                                                                                                 | 类型                                           | 默认值      | 版本 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ----------- | ---- |
| type          | 设置按钮类型                                                                                                                         | `primary` \| `secondary`                       | `secondary` |
| danger        | 设置危险按钮                                                                                                                         | boolean                                        |             |      |
| ghost         | 设置危幽灵模式                                                                                                                       | boolean                                        |             |      |
| success       | 设置成功按钮                                                                                                                         | boolean                                        |             |      |
| primary       | 设置主题色按钮                                                                                                                       | boolean                                        |             |      |
| disabled      | 设置按钮失效状态                                                                                                                     | boolean                                        |             |      |
| focus         | 设置按钮的聚焦状态                                                                                                                   | boolean                                        |             |      |
| dropdown      | 设置按钮的下拉样式状态                                                                                                               | boolean                                        |             |      |
| withoutBorder | 无边框属性                                                                                                                           | boolean                                        |             |      |
| block         | 将按钮宽度调整为其父宽度的选项                                                                                                       | boolean                                        |             |      |
| size          | 设置按钮大小                                                                                                                         | `large` \| `middle` \| `small`                 | `middle`    |      |
| loading       | 设置按钮载入状态                                                                                                                     | boolean                                        |             |      |
| onlyLoading   | 在`loading`属性下生效，只加载 loading 状态                                                                                           | boolean                                        |             |      |
| htmlType      | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string                                         | `button`    |      |
| icon          | 设置按钮的图标组件                                                                                                                   | ReactNode                                      | -           |      |
| onlyIcon      | 只显示 Icon 的 button                                                                                                                | boolean                                        | -           |      |
| iconDirection | Icon 方向                                                                                                                            | `left` \| `right`                              | `left`      |      |
| onClick       | 点击按钮时的回调                                                                                                                     | (event: MouseEvent) => void                    | -           |      |
| showTooltip   | 设置按钮的 tooltip 的展示                                                                                                            | boolean                                        | -           |      |
| tooltipTitle  | 设置按钮的 tooltip 的展示内容                                                                                                        | React.ReactNode \| RenderFunction              | -           |      |
| tooltipProps  | tooltip 的配置                                                                                                                       | [TooltipProps](/components/tooltip#共同的-api) | -           |      |

### Link

| 属性          | 说明                                                  | 类型                        | 默认值   | 版本 |
| ------------- | ----------------------------------------------------- | --------------------------- | -------- | ---- |
| href          | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string                      | -        |
| target        | 相当于 a 链接的 target 属性，href 存在时生效          | string                      | -        |      |
| size          | 设置按钮大小                                          | `middle` \| `small`         | `middle` |      |
| danger        | 设置危险按钮                                          | boolean                     |          |      |
| primary       | 设置主题色按钮                                        | boolean                     |          |      |
| disabled      | 设置按钮失效状态                                      | boolean                     |          |      |
| icon          | 设置按钮的图标组件                                    | ReactNode                   | -        |      |
| iconDirection | Icon 方向                                             | `left` \| `right`           | `left`   |      |
| onClick       | 点击按钮时的回调                                      | (event: MouseEvent) => void | -        |      |

### Check

| 属性           | 说明         | 类型    | 默认值 | 版本 |
| -------------- | ------------ | ------- | ------ | ---- |
| checked        | 选中状态     | boolean |        |
| defaultChecked | 默认选中状态 | boolean |        |      |

### ButtonGroup

:::info{title=注意}
ButtonGroup 已设置的属性如果和 Button 属性重名，Button 的该属性失效
:::

| 属性     | 说明             | 类型                | 默认值   | 版本 |
| -------- | ---------------- | ------------------- | -------- | ---- |
| size     | 设置按钮大小     | `middle` \| `small` | `middle` |      |
| disabled | 设置按钮失效状态 | boolean             |          |      |
