---
toc: content
title: Rate（评分）
nav:
  title: 组件
group:
  title: 数据录入
demo:
  cols: 2
---

# Rate（评分）

评分组件。

## 代码演示

<code src="./basic.tsx" description="最简单的用法。">基础用法</code>
<code src="./half.tsx"  description="支持选中半星。">半星</code>
<code src="./text.tsx" description="给评分组件加上文案展示。">文案展现</code>
<code src="./disabled.tsx"  description="只读，无法进行鼠标交互。">只读</code>
<code src="./clear.tsx"  description="支持允许或者禁用清除。">清除</code>
<code src="./character.tsx"  description="可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。">其他字符</code>
<code src="./character-function.tsx"  description="可以使用 `(RateProps) => ReactNode` 的方式自定义每一个字符。">自定义字符</code>

## API

<!-- prettier-ignore -->
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | boolean | true |  |
| allowHalf | 是否允许半选 | boolean | false |  |
| autoFocus | 自动获取焦点 | boolean | false |  |
| character | 自定义字符 | ReactNode \| (RateProps) => ReactNode | &lt;StarOn /> | |
| className | 自定义样式类名 | string | - |  |
| count | star 总数 | number | 5 |  |
| defaultValue | 默认值 | number | 0 |  |
| disabled | 只读，无法进行交互 | boolean | false |  |
| style | 自定义样式对象 | CSSProperties | - |  |
| tooltips | 自定义每项的提示信息 | string\[] | - |  |
| value | 当前数，受控值 | number | - |  |
| onBlur | 失去焦点时的回调 | function() | - |  |
| onChange | 选择时的回调 | function(value: number) | - |  |
| onFocus | 获取焦点时的回调 | function() | - |  |
| onHoverChange | 鼠标经过时数值变化的回调 | function(value: number) | - |  |
| onKeyDown | 按键回调 | function(event) | - |  |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
