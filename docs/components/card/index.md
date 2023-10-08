---
toc: content
title: Card（卡片）
group:
  title: 数据展示
demo:
  cols: 2
---

# Card（卡片）

通用卡片容器。

## 代码演示

<code src="./basic.tsx" description="包含标题、内容、操作区域。">经典卡片</code>
<code src="./borderless.tsx" description="在灰色背景上使用无边框的卡片。" background="var(--metro-fill-1)">无边框</code>
<code src="./more.tsx" description="一种支持封面、头像、标题和描述信息的卡片。">支持更多内容配置</code>
<code src="./meta.tsx" description="可以利用 `Card.Meta` 支持更灵活的内容。">更灵活的内容展示</code>
<code src="./tabs-card.tsx" description="可承载更多内容。">带页签的卡片</code>
<code src="./in-card.tsx" description="可以放在普通卡片内部，展示多层级结构的信息。">内部卡片</code>

<code src="./grid.tsx" description="一种常见的卡片内容区隔模式。">网格型内嵌卡片</code>

## API

```js
<Card title="卡片标题">卡片内容</Card>
```

### Card

| 参数                | 说明                                                | 类型                                    | 默认值       | 版本 |
| ------------------- | --------------------------------------------------- | --------------------------------------- | ------------ | ---- |
| actions             | 卡片操作组，位置在卡片底部                          | Array&lt;ReactNode>                     | -            |      |
| activeTabKey        | 当前激活页签的 key                                  | string                                  | -            |      |
| bodyStyle           | 内容区域自定义样式                                  | CSSProperties                           | -            |      |
| bordered            | 是否有边框                                          | boolean                                 | true         |      |
| cover               | 卡片封面                                            | ReactNode                               | -            |      |
| defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey     | string                                  | `第一个页签` |      |
| extra               | 卡片右上角的操作区域                                | ReactNode                               | -            |      |
| headStyle           | 自定义标题区域样式                                  | CSSProperties                           | -            |      |
| hoverable           | 鼠标移过时可浮起                                    | boolean                                 | false        |      |
| loading             | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean                                 | false        |      |
| size                | card 的尺寸                                         | `default` \| `small`                    | `default`    |      |
| tabBarExtraContent  | tab bar 上额外的元素                                | ReactNode                               | -            |      |
| tabList             | 页签标题列表                                        | Array&lt;{key: string, tab: ReactNode}> | -            |      |
| tabProps            | [Tabs](/components/tabs#tabs)                       | -                                       | -            |      |
| title               | 卡片标题                                            | ReactNode                               | -            |      |
| type                | 卡片类型，可设置为 `inner` 或 不设置                | string                                  | -            |      |
| onTabChange         | 页签切换的回调                                      | (key) => void                           | -            |      |

### Card.Grid

| 参数      | 说明                   | 类型          | 默认值 | 版本 |
| --------- | ---------------------- | ------------- | ------ | ---- |
| className | 网格容器类名           | string        | -      |      |
| hoverable | 鼠标移过时可浮起       | boolean       | true   |      |
| style     | 定义网格容器类名的样式 | CSSProperties | -      |      |

### Card.Meta

| 参数        | 说明               | 类型          | 默认值 | 版本 |
| ----------- | ------------------ | ------------- | ------ | ---- |
| avatar      | 头像/图标          | ReactNode     | -      |      |
| className   | 容器类名           | string        | -      |      |
| description | 描述内容           | ReactNode     | -      |      |
| style       | 定义容器类名的样式 | CSSProperties | -      |      |
| title       | 标题内容           |
