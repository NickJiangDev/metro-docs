---
toc: content
title: InputTags（标签输入）
nav:
  title: 组件
group:
  title: 数据录入
---

# InputTags（标签输入）

通过键盘行为，在输入框里面展示 Tag。

<code src="./basic.tsx">基本使用</code>
<code src="./controlled.tsx" description="通过`value`和`onChange`改变值。">受控模式</code>
<code src="./size.tsx" description="我们为 `InputTags` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。">三种大小</code>
<code src="./disabled.tsx" description="设置为不可用。">禁用状态</code>
<code src="./separators.tsx" description="通过`separators`修改触发按键提交。默认`Enter`">自定义按键</code>
<code src="./validate.tsx" description="通过`beforeAddValidate`自定义校验。">自定义验证</code>
<code src="./disabled-space-remove.tsx" description="`disableBackspaceRemove`禁止键盘删除的行为。">禁止键盘删除</code>
<code src="./borderless.tsx" description="没有边框。">无边框模式</code>
<code src="./status.tsx" description="使用 `status` 为 Input 添加状态，可选 `error` \| `warning` \| `success`。">自定义状态</code>

## API

### Input

| 参数                   | 说明                                                | 类型                                             | 默认值    | 版本 |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------ | --------- | ---- |
| separators             | 触发提交 tag 的按键                                 | string[]                                         | ['Enter'] |      |
| disableBackspaceRemove | 禁止按回退键删除 tag                                | boolean                                          | -         |      |
| onExisting             | 校验退回钩子                                        | (tag: string) => void                            | -         |      |
| onRemove               | 删除钩子                                            | (tag: string) => void                            | -         |      |
| beforeAddValidate      | 添加前的验证钩子                                    | (tag: string, existingTags: string[]) => boolean |           |      |
| wrapClassName          | 包裹类名                                            | string                                           | -         |      |
| onInputChange          | `Input`的提交回调                                   | `InputProps['onChange']`                         | -         |      |
| tagClassName           | 标签类名                                            | string                                           | -         |      |
| tagProps               | 标签的属性                                          | [TagProps](/components/tag#api)                  | -         |      |
| defaultValue           | 输入框默认内容                                      | string                                           | -         |      |
| value                  | 输入框内容                                          | string                                           | -         |      |
| onChange               | 输入框内容变化时的回调                              | function(string[])                               | -         |      |
| bordered               | 是否有边框                                          | boolean                                          | true      |      |
| disabled               | 是否禁用状态，默认为 false                          | boolean                                          | false     |      |
| id                     | 输入框的 id                                         | string                                           | -         |      |
| maxLength              | 最大长度                                            | number                                           | -         |      |
| status                 | 设置校验状态                                        | 'error' \| 'warning' \| 'success'                | -         |      |
| size                   | 控件大小。注：标准表单内的输入框大小限制为 `middle` | `large` \| `middle` \| `small`                   | -         |      |
| type                   | 声明 input 类型，同原生 input 标签的 type 属性      | string                                           | `text`    |      |
