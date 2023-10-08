---
toc: content
title: Toggle（开关）
nav:
  title: 组件
group:
  title: 数据录入
demo:
  cols: 2
---

# Toggle（开关）

开关选择器。

## 代码演示

<code src="./basic.tsx">基础使用</code>
<code src="./highlight.tsx" description="开启`textHighlight`选中时文案为品牌色。">文案随组件状态高亮</code>
<code src="./disabled.tsx" description="Toggle失效状态。">禁用</code>
<code src="./custom-inner.tsx" description="带有文字和图标。">文字和图标</code>
<code src="./size.tsx" description="提供三种尺寸, `small` `middle` `large`，默认`middle`。">尺寸</code>
<code src="./loading.tsx" description="标识开关操作仍在执行中。">加载中</code>

## API

| 参数                | 说明                                       | 类型                                     | 默认值   | 版本 |
| ------------------- | ------------------------------------------ | ---------------------------------------- | -------- | ---- |
| autoFocus           | 组件自动获取焦点                           | boolean                                  | false    |      |
| checked             | 指定当前是否选中                           | boolean                                  | false    |      |
| checkedChildren     | 选中时的内容                               | ReactNode                                | -        |      |
| unCheckedChildren   | 非选中时的内容                             | ReactNode                                | -        |      |
| textHighlight       | 文案高亮                                   | boolean                                  | -        |      |
| suffix              | 前缀                                       | React.ReactNode                          | -        |      |
| className           | Toggle 器类名                              | string                                   | -        |      |
| defaultChecked      | 初始是否选中                               | boolean                                  | false    |      |
| disabled            | 是否禁用                                   | boolean                                  | false    |      |
| loading             | 加载中的开关                               | boolean                                  | false    |      |
| showText            | 显示文案                                   | boolean                                  | false    |      |
| showChildren        | 显示渲染在控件内部的内容                   | boolean                                  | true     |      |
| checkedText         | 选中文案                                   | React.ReactNode                          |          |      |
| unCheckedText       | 非选中文案                                 | React.ReactNode                          |          |      |
| enableChangeLoading | 允许修改加载                               | boolean                                  | false    |      |
| size                | 开关大小，可选值：`middle` `small` `large` | string                                   | `middle` |      |
| onChange            | 变化时的回调函数                           | function(checked: boolean, event: Event) | -        |      |
| onClick             | 点击时的回调函数                           | function(checked: boolean, event: Event) | -        |      |
