---
toc: content
title: InputNumber（数字输入框）
nav:
  title: 组件
group:
  title: 数据录入
demo:
  cols: 2
---

# InputNumber（数字输入框）

通过鼠标或键盘，输入范围内的数值。

<code src="./basic.tsx">基本使用</code>
<code src="./size.tsx" description="三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。">三种大小</code>
<code src="./addon.tsx" description="用于配置一些固定组合。">前置/后置标签</code>
<code src="./disabled.tsx">不可用</code>
<code src="./digit.tsx" description="通过 `stringMode` 开启高精度小数支持，`onChange` 事件将返回 string 类型。对于旧版浏览器，你需要 BigInt polyfill。">高精度小数</code>
<code src="./borderless.tsx">没有边框</code>
<code src="./keyboard.tsx">关闭键盘行为</code>
<code src="./out-of-range.tsx" description="当通过受控将 `value` 超出边界时，提供警告样式。">超出边界</code>
<code src="./status.tsx" description="使用 status 为 `InputNumber` 添加状态，可选 `error` `warning` `success`。">自定义状态</code>
<code src="./locked.tsx" description="`InputNumber.Locked`将锁定你输入的值。">锁定状态</code>

## API

属性如下

| 成员             | 说明                                                                 | 类型                                                                                    | 默认值                                                                                                                              | 版本 |
| ---------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---- |
| addonAfter       | 带标签的 input，设置后置标签                                         | ReactNode                                                                               | -                                                                                                                                   |      |
| addonBefore      | 带标签的 input，设置前置标签                                         | ReactNode                                                                               | -                                                                                                                                   |      |
| autoFocus        | 自动获取焦点                                                         | boolean                                                                                 | false                                                                                                                               | -    |
| bordered         | 是否有边框                                                           | boolean                                                                                 | true                                                                                                                                |      |
| controls         | 是否显示增减按钮，也可设置自定义箭头图标                             | boolean \| { upIcon?: React.ReactNode; downIcon?: React.ReactNode; }                    | -                                                                                                                                   |      |
| decimalSeparator | 小数点                                                               | string                                                                                  | -                                                                                                                                   | -    |
| defaultValue     | 初始值                                                               | number                                                                                  | -                                                                                                                                   | -    |
| disabled         | 禁用                                                                 | boolean                                                                                 | false                                                                                                                               | -    |
| formatter        | 指定输入框展示值的格式                                               | function(value: number \| string, info: { userTyping: boolean, input: string }): string | -                                                                                                                                   |      |
| keyboard         | 是否启用键盘快捷行为                                                 | boolean                                                                                 | true                                                                                                                                |      |
| max              | 最大值                                                               | number                                                                                  | [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) | -    |
| min              | 最小值                                                               | number                                                                                  | [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) | -    |
| parser           | 指定从 `formatter` 里转换回数字的方式，和 `formatter` 搭配使用       | function(string): number                                                                | -                                                                                                                                   | -    |
| precision        | 数值精度，配置 `formatter` 时会以 `formatter` 为准                   | number                                                                                  | -                                                                                                                                   | -    |
| readOnly         | 只读                                                                 | boolean                                                                                 | false                                                                                                                               | -    |
| status           | 设置校验状态                                                         | 'error' \| 'warning'                                                                    | -                                                                                                                                   |      |
| prefix           | 带有前缀图标的 input                                                 | ReactNode                                                                               | -                                                                                                                                   |      |
| size             | 输入框大小                                                           | `large` \| `middle` \| `small`                                                          | -                                                                                                                                   | -    |
| step             | 每次改变步数，可以为小数                                             | number \| string                                                                        | 1                                                                                                                                   | -    |
| stringMode       | 字符值模式，开启后支持高精度小数。同时 `onChange` 将返回 string 类型 | boolean                                                                                 | false                                                                                                                               |      |
| value            | 当前值                                                               | number                                                                                  | -                                                                                                                                   | -    |
| onChange         | 变化回调                                                             | function(value: number \| string \| null)                                               | -                                                                                                                                   | -    |
| onPressEnter     | 按下回车的回调                                                       | function(e)                                                                             | -                                                                                                                                   | -    |
| onStep           | 点击上下箭头的回调                                                   | (value: number, info: { offset: number, type: 'up' \| 'down' }) => void                 | -                                                                                                                                   |      |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

## FAQ

### 为何受控模式下，`value` 可以超出 `min` 和 `max` 范围？

在受控模式下，开发者可能自行存储相关数据。如果组件将数据约束回范围内，会导致展示数据与实际存储数据不一致的情况。这使得一些如表单场景存在潜在的数据问题。

### 为何动态修改 `min` 和 `max` 让 `value` 超出范围不会触发 `onChange` 事件？

`onChange` 事件为用户触发事件，自行触发会导致表单库误以为变更来自用户操作。我们以错误样式展示超出范围的数值。
