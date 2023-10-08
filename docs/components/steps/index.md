---
toc: content
title: Steps (步骤条)
nav:
  title: 组件
group:
  title: 导航
demo:
  cols: 2
---

# Steps (步骤条)

引导用户按照流程完成任务的导航条。

## 代码演示

<code src="./basic.tsx">基本用法</code>

<code src="./small.tsx" description="迷你版的步骤条。">迷你版</code>

<code src="./line.tsx">线性展示</code>

<code src="./verical.tsx">垂直步骤条</code>
<code src="./verical-line.tsx">垂直线性步骤条</code>

<code src="./label-hori.tsx" description="可通过`labelPlacement='horizontal'`控制。">文字横向展示</code>

<code src="./steps-change.tsx" description="通常配合内容及按钮使用，表示一个流程的处理进度。">步骤切换</code>

<code src="./error.tsx" description="使用 Steps 的 `status` 属性来指定当前步骤的状态。">步骤运行错误</code>

<code src="./custom-dot.tsx" description="为点状步骤条增加自定义展示。">自定义点状步骤条</code>

<code src="./checkable.tsx" description="设置 `onChange` 后，Steps 变为可点击状态。">可点击</code>

## API

### Steps

整体步骤条。

| 参数           | 说明                                                                          | 类型                                                                   | 默认值       | 版本 |
| -------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------ | ---- |
| className      | 步骤条类名                                                                    | string                                                                 | -            |      |
| current        | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number                                                                 | 0            |      |
| direction      | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向      | string                                                                 | `horizontal` |      |
| initial        | 起始序号，从 0 开始记数                                                       | number                                                                 | 0            |      |
| labelPlacement | 指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方              | string                                                                 | `vertical`   |      |
| percent        | 当前 `process` 步骤显示的进度条进度（只对基本类型的 Steps 生效）              | number                                                                 | -            |      |
| progressDot    | 点状步骤条，可以设置为一个 function，labelPlacement 将强制为 `vertical`       | boolean \| (iconDot, {index, status, title, description}) => ReactNode | false        |      |
| responsive     | 当屏幕宽度小于 `532px` 时自动变为垂直模式                                     | boolean                                                                | true         |      |
| size           | 指定大小，目前支持普通（`default`）和迷你（`small`）                          | string                                                                 | `default`    |      |
| status         | 指定当前步骤的状态，可选 `wait` `process` `finish` `error`                    | string                                                                 | `process`    |      |
| type           | 步骤条类型，可选 `default` `navigation` `inline` `line`                       | string                                                                 | `default`    |      |
| onChange       | 点击切换步骤时触发                                                            | (current) => void                                                      | -            |      |
| items          | 配置选项卡内容                                                                | [StepItem](#stepitem)                                                  | []           |      |

### `type="inline"`

| 参数      | 说明                                                                          | 类型                  | 默认值    | 版本 |
| --------- | ----------------------------------------------------------------------------- | --------------------- | --------- | ---- |
| className | 步骤条类名                                                                    | string                | -         |      |
| current   | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number                | 0         |      |
| initial   | 起始序号，从 0 开始记数                                                       | number                | 0         |      |
| status    | 指定当前步骤的状态，可选 `wait` `process` `finish` `error`                    | string                | `process` |      |
| onChange  | 点击切换步骤时触发                                                            | (current) => void     | -         |      |
| items     | 配置选项卡内容，不支持 `icon` `subtitle`                                      | [StepItem](#stepitem) | []        |      |

### StepItem

步骤条内的每一个步骤。

| 参数        | 说明                                                                                                          | 类型      | 默认值 | 版本 |
| ----------- | ------------------------------------------------------------------------------------------------------------- | --------- | ------ | ---- |
| description | 步骤的详情描述，可选                                                                                          | ReactNode | -      |      |
| disabled    | 禁用点击                                                                                                      | boolean   | false  |      |
| icon        | 步骤图标的类型，可选                                                                                          | ReactNode | -      |      |
| status      | 指定状态。当不配置该属性时，会使用 Steps 的 `current` 来自动指定状态。可选：`wait` `process` `finish` `error` | string    | `wait` |      |
| subTitle    | 子标题                                                                                                        | ReactNode | -      |      |
| title       | 标题                                                                                                          | ReactNode | -      |      |
