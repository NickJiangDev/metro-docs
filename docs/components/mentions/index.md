---
toc: content
title: Mentions（提及）
nav:
  title: 组件
group:
  title: 数据录入
demo:
  cols: 2
---

# Mentions（提及）

提及组件。

## 何时使用

用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

## 代码演示

<!-- prettier-ignore -->
<code src="./basic.tsx" description="基本使用。">基本使用</code>
<code src="./onChange.tsx" description="可以通过`onChange`的第二个参数获取到被提及列表。">值改变</code>
<code src="./size.tsx">尺寸</code>
<code src="./async.tsx" description="匹配内容列表为异步返回时。">异步加载</code>
<code src="./form.tsx" description="受控模式，例如配合 Form 使用。">配合 Form 使用</code>
<code src="./prefix.tsx" description="通过 `prefix` 属性自定义触发字符。默认为 `@`, 可以定义为数组。">自定义触发字符</code>
<code src="./readonly.tsx" description="通过 `disabled` 属性设置是否生效。通过 `readOnly` 属性设置是否只读。">无效或只读</code>
<code src="./placement.tsx" description="向上展开建议。">向上展开</code>
<code src="./borderless.tsx" description="`bordered`设为`false`。">无边框模式</code>
<code src="./autoSize.tsx" description="自适应内容高度。">自动大小</code>
<code src="./status.tsx" description="使用 `status` 为 `Mentions` 添加状态。可选 `error` 或者 `warning`。">自定义状态</code>

## API

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 自动获得焦点 | boolean | false |  |
| bordered | 是否显示边框 | boolean | true |  |
| size  | 控件大小。  | `large` \| `middle` \| `small` | `middle`  |      |
| autoSize | 自适应内容高度，可设置为 true \| false 或对象：{ minRows: 2, maxRows: 6 } | boolean \| object | false |  |
| defaultValue | 默认值 | string | - |  |
| filterOption | 自定义过滤逻辑 | false \| (input: string, option: OptionProps) => boolean | - |  |
| getPopupContainer | 指定建议框挂载的 HTML 节点 | () => HTMLElement | - |  |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | `Not Found` |  |
| placement | 弹出层展示位置 | `top` \| `bottom` | `bottom` |  |
| prefix | 设置触发关键字 | string \| string\[] | `@` |  |
| split | 设置选中项前后分隔符 | string | `` |  |
| status | 设置校验状态 | 'error' \| 'warning' | - |  |
| validateSearch | 自定义触发验证逻辑 | (text: string, props: MentionsProps) => void | - |  |
| value | 设置值 | string | - |  |
| onBlur | 失去焦点时触发 | () => void | - |  |
| onChange | 值改变时触发 | (text: string, lists: string[]) => void | - |  |
| onFocus | 获得焦点时触发 | () => void | - |  |
| onResize | resize 回调 | function({ width, height }) | - |  |
| onSearch | 搜索时触发 | (text: string, prefix: string) => void | - |  |
| onSelect | 选择选项时触发 | (option: OptionProps, prefix: string) => void | - |  |
| options | 选项配置 | [Options](#option) | [] |  |

### Mentions 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### Option

| 参数      | 说明           | 类型                | 默认值 |
| --------- | -------------- | ------------------- | ------ |
| value     | 选择时填充的值 | string              | -      |
| label     | 选项的标题     | React.ReactNode     | -      |
| key       | 选项的 key 值  | string              | -      |
| disabled  | 是否可选       | boolean             | -      |
| className | css 类名       | string              | -      |
| style     | 选项样式       | React.CSSProperties | -      |
