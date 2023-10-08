---
toc: content
title: Radio（单选框）
nav:
  title: 组件
group:
  title: 数据录入
demo:
  cols: 2
---

# Radio（单选框）

单选框。

## 代码演示

<code src="./basic.tsx" description="最简单的用法。">基础用法</code>
<code src="./highlight.tsx" description="开启textHighlight文案为品牌色。">文案随组件状态高亮</code>
<code src="./disabled.tsx" description="Radio 不可用。">禁用</code>
<code src="./single.tsx" description="互斥关系。">单选组合</code>
<code src="./group-vertical.tsx" description="垂直的 Radio.Group，配合更多输入框选项。">Radio.Group 垂直</code>
<code src="./group.tsx" description="通过配置 `options` 参数来渲染单选框。也可通过 `optionType` 参数来设置 Radio 类型。">Radio.Group</code>
<code src="./group-size.tsx" description="`large` `middle` `small` 三种尺寸， 默认`middle`">Radio.Group 尺寸</code>

## API

### Radio/Radio.Button

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 禁用 Radio | boolean | false |
| value | 根据 value 进行比较，判断是否选中 | any | - |

### Radio.Group

单选框组合，用于包裹一组 `Radio`。

| 参数          | 说明                                                   | 类型                                                                                         | 默认值     | 版本 |
| ------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ---------- | ---- |
| defaultValue  | 默认选中的值                                           | any                                                                                          | -          |      |
| disabled      | 禁选所有子单选器                                       | boolean                                                                                      | false      |      |
| name          | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string                                                                                       | -          |      |
| textHighlight | 文案高亮                                               | boolean                                                                                      | -          |      |
| options       | 以配置形式设置子元素                                   | string\[] \| number\[] \| Array&lt;{ label: ReactNode; value: string; disabled?: boolean; }> | -          |      |
| optionType    | 用于设置 Radio `options` 类型                          | `default` \| `button`                                                                        | `default`  |      |
| size          | 大小，只对按钮样式生效                                 | `large` \| `middle` \| `small`                                                               | -          |      |
| value         | 用于设置当前选中的值                                   | any                                                                                          | -          |      |
| onChange      | 选项变化时的回调函数                                   | function(e:Event)                                                                            | -          |      |
| direction     | 排列方向                                               | horizontal \| vertical                                                                       | horizontal |      |
| spaceProps    | 更多关于 Group 间距的用法，请参考                      | [SpaceProps](/components/space#api)                                                          | -          |      |

## 方法

### Radio

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
