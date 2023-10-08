---
toc: content
title: Checkbox（多选框）
nav:
  title: 组件
group:
  title: 数据录入
demo:
  cols: 2
---

# Checkbox（多选框）

多选框。

## 代码演示

<code src="./basic.tsx">基础用法</code>
<code src="./highlight.tsx" description="开启`textHighlight`文案为品牌色。">文案随组件状态高亮</code>
<code src="./disabled.tsx" description="checkbox 不可用。">不可用</code>
<code src="./loading.tsx" description="交互需要发送请求可以通过`loading`参数来控制组件状态。">加载中的状态</code>
<code src="./controller.tsx" description="联动checkbox。">受控的 checkbox</code>
<code src="./group.tsx" description="方便的从数组生成Checkbox组，可以控制间距和方向。参考属性`spaceProps`">checkbox 组</code>
<code src="./indeterminate.tsx">半选效果</code>

## API

#### Checkbox

| 参数           | 说明                                    | 类型                             | 默认值 | 版本 |
| -------------- | --------------------------------------- | -------------------------------- | ------ | ---- |
| autoFocus      | 自动获取焦点                            | boolean                          | false  |      |
| checked        | 指定当前是否选中                        | boolean                          | false  |      |
| defaultChecked | 初始是否选中                            | boolean                          | false  |      |
| textHighlight  | 文案高亮                                | boolean                          | -      |      |
| disabled       | 失效状态                                | boolean                          | false  |      |
| loading        | 加载中的状态                            | boolean                          | false  |      |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | boolean                          | false  |      |
| onChange       | 变化时的回调函数                        | (e: CheckboxChangeEvent) => void | -      |      |

#### Checkbox Group

| 参数         | 说明                                                         | 类型                                        | 默认值     | 版本 |
| ------------ | ------------------------------------------------------------ | ------------------------------------------- | ---------- | ---- |
| defaultValue | 默认选中的选项                                               | (string \| number)\[]                       | \[]        |      |
| disabled     | 整组失效                                                     | boolean                                     | false      |      |
| name         | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string                                      | -          |      |
| options      | 指定可选项                                                   | string\[] \| number\[] \| Option\[]         | \[]        |      |
| value        | 指定选中的选项                                               | (string \| number \| boolean)\[]            | \[]        |      |
| onChange     | 变化时的回调函数                                             | (checkedValue: CheckboxValueType[]) => void | -          |      |
| direction    | 排列方向                                                     | horizontal \| vertical                      | horizontal |      |
| spaceProps   | 更多关于 Group 间距的用法，请参考                            | [SpaceProps](/components/space#api)         | -          |      |

##### Option

```typescript
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

### 方法

#### Checkbox

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
