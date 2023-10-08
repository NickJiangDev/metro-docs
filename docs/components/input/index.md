---
toc: content
title: Input（输入框）
nav:
  title: 组件
group:
  title: 数据录入
  order: 4
demo:
  cols: 2
---

# Input（输入框）

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 代码演示

<code src="./basic.tsx">基本使用</code>
<code src="./size.tsx" description="我们为 `Input` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。">三种大小</code>
<code src="./addon.tsx">前置/后置标签</code>
<code src="./search-loading.tsx" description="用于 `onSearch` 的时候展示 `loading`。">搜索框 loading</code>
<code src="./search-input.tsx" description="带有搜索按钮的输入框。">搜索框</code>
<code src="./status.tsx" description="使用 `status` 为 Input 添加状态，可选 `error` \| `warning` \| `success`。">自定义状态</code>
<code src="./password.tsx">密码框</code>
<code src="./textarea.tsx" description="用于多行输入。">文本域</code>
<code src="./borderless.tsx" description="没有边框。">无边框</code>
<code src="./autosize-textarea.tsx" description="`autoSize` 属性适用于 `textarea` 节点，并且只有高度会自动变化。另外 `autoSize` 可以设定为一个对象，指定最小行数和最大行数。">适应文本高度的文本域</code>

<code src="./focus.tsx" description="聚焦额外配置属性。">聚焦</code>

## API

### Input

| 参数         | 说明                                                                                                                                                                                | 类型                                                                                                | 默认值 | 版本 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------ | ---- |
| addonAfter   | 带标签的 input，设置后置标签                                                                                                                                                        | ReactNode                                                                                           | -      |      |
| addonBefore  | 带标签的 input，设置前置标签                                                                                                                                                        | ReactNode                                                                                           | -      |      |
| allowClear   | 可以点击清除图标删除内容                                                                                                                                                            | boolean \| { clearIcon: ReactNode }                                                                 | -      |      |
| bordered     | 是否有边框                                                                                                                                                                          | boolean                                                                                             | true   |      |
| defaultValue | 输入框默认内容                                                                                                                                                                      | string                                                                                              | -      |      |
| disabled     | 是否禁用状态，默认为 false                                                                                                                                                          | boolean                                                                                             | false  |      |
| id           | 输入框的 id                                                                                                                                                                         | string                                                                                              | -      |      |
| maxLength    | 最大长度                                                                                                                                                                            | number                                                                                              | -      |      |
| showCount    | 是否展示字数                                                                                                                                                                        | boolean \| { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode } | false  |      |
| status       | 设置校验状态                                                                                                                                                                        | 'error' \| 'warning' \| 'success'                                                                   | -      |      |
| prefix       | 带有前缀图标的 input                                                                                                                                                                | ReactNode                                                                                           | -      |      |
| size         | 控件大小。注：标准表单内的输入框大小限制为 `middle`                                                                                                                                 | `large` \| `middle` \| `small`                                                                      | -      |      |
| suffix       | 带有后缀图标的 input                                                                                                                                                                | ReactNode                                                                                           | -      |      |
| type         | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`) | string                                                                                              | `text` |      |
| value        | 输入框内容                                                                                                                                                                          | string                                                                                              | -      |      |
| onChange     | 输入框内容变化时的回调                                                                                                                                                              | function(e)                                                                                         | -      |      |
| onPressEnter | 按下回车的回调                                                                                                                                                                      | function(e)                                                                                         | -      |      |

> 如果 `Input` 在 `Form.Item` 内，并且 `Form.Item` 设置了 `id` 和 `options` 属性，则 `value` `defaultValue` 和 `id` 属性会被自动设置。

Input 的其他属性和 React 自带的 [input](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes) 一致。

### Input.TextArea

| 参数         | 说明                                                                      | 类型                                                                                             | 默认值 | 版本 |
| ------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------ | ---- |
| allowClear   | 可以点击清除图标删除内容                                                  | boolean                                                                                          | false  |      |
| autoSize     | 自适应内容高度，可设置为 true \| false 或对象：{ minRows: 2, maxRows: 6 } | boolean \| object                                                                                | false  |      |
| bordered     | 是否有边框                                                                | boolean                                                                                          | true   |      |
| defaultValue | 输入框默认内容                                                            | string                                                                                           | -      |      |
| maxLength    | 内容最大长度                                                              | number                                                                                           | -      |      |
| showCount    | 是否展示字数                                                              | boolean \| { formatter: (info: { value: string, count: number, maxLength?: number }) => string } | false  |      |
| value        | 输入框内容                                                                | string                                                                                           | -      |      |
| onPressEnter | 按下回车的回调                                                            | function(e)                                                                                      | -      |      |
| onResize     | resize 回调                                                               | function({ width, height })                                                                      | -      |      |

`Input.TextArea` 的其他属性和浏览器自带的 [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) 一致。

#### Input.Search

| 参数        | 说明                                                           | 类型                   | 默认值 |
| ----------- | -------------------------------------------------------------- | ---------------------- | ------ |
| enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 `addonAfter` 冲突。 | boolean \| ReactNode   | false  |
| loading     | 搜索 loading                                                   | boolean                | false  |
| onSearch    | 点击搜索图标、清除图标，或按下回车键时的回调                   | function(value, event) | -      |

其余属性和 Input 一致。

#### Input.Password

| 参数             | 说明                             | 类型                                             | 默认值                                                                    | 版本 |
| ---------------- | -------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------- | ---- |
| iconRender       | 自定义切换按钮                   | (visible) => ReactNode                           | (visible) => (visible ? &lt;EyeOutlined /> : &lt;EyeInvisibleOutlined />) |      |
| visibilityToggle | 是否显示切换按钮或者控制密码显隐 | boolean \| [VisibilityToggle](#visibilitytoggle) | true                                                                      |      |

#### VisibilityToggle

| Property        | Description          | Type    | Default | Version |
| --------------- | -------------------- | ------- | ------- | ------- |
| visible         | 用于手动控制密码显隐 | boolean | false   |         |
| onVisibleChange | 显隐密码的回调       | boolean | -       |         |

#### Input Methods

| 名称  | 说明     | 参数                                                                       | 版本 |
| ----- | -------- | -------------------------------------------------------------------------- | ---- |
| blur  | 取消焦点 | -                                                                          |      |
| focus | 获取焦点 | (option?: { preventScroll?: boolean, cursor?: 'start' \| 'end' \| 'all' }) |      |

## FAQ

### 为何 TextArea 受控时，`value` 可以超过 `maxLength`？

受控时，组件应该按照受控内容展示。以防止在表单组件内使用时显示值和提交值不同的问题。
