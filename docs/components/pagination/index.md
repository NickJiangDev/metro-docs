---
toc: content
title: Pagination（分页）
nav:
  title: 组件
group:
  title: 导航
---

# Pagination（分页）

采用分页的形式分隔长列表，每次只加载一个页面。

## 代码演示

<code src="./basic.tsx">基础使用</code>
<code src="./more.tsx">更多</code>
<code src="./change-count.tsx">改变条数</code>
<code src="./jump.tsx">快速跳转</code>
<code src="./input-jump.tsx">输入翻页</code>
<code src="./prev-next.tsx" description="修改上一步和下一步为文字链接。">上一步和下一步</code>
<code src="./mini.tsx">迷你版本</code>

## API

| 参数             | 说明                                                         | 类型                                                                         | 默认值                     | 版本 |
| ---------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------- | -------------------------- | ---- |
| current          | 当前页数                                                     | number                                                                       | -                          |      |
| defaultCurrent   | 默认的当前页数                                               | number                                                                       | 1                          |      |
| defaultPageSize  | 默认的每页条数                                               | number                                                                       | 10                         |      |
| disabled         | 禁用分页                                                     | boolean                                                                      | -                          |      |
| hideOnSinglePage | 只有一页时是否隐藏分页器                                     | boolean                                                                      | false                      |      |
| itemRender       | 用于自定义页码的结构，可用于优化 SEO                         | (page, type: 'page' \| 'prev' \| 'next', originalElement) => React.ReactNode | -                          |      |
| pageSize         | 每页条数                                                     | number                                                                       | -                          |      |
| pageSizeOptions  | 指定每页可以显示多少条                                       | string\[]                                                                    | \[`10`, `20`, `50`, `100`] |      |
| responsive       | 当 size 未指定时，根据屏幕宽度自动调整尺寸                   | boolean                                                                      | -                          |      |
| showLessItems    | 是否显示较少页面内容                                         | boolean                                                                      | false                      |      |
| showQuickJumper  | 是否可以快速跳转至某页                                       | boolean \| { goButton: ReactNode }                                           | false                      |      |
| showSizeChanger  | 是否展示 `pageSize` 切换器，当 `total` 大于 50 时默认为 true | boolean                                                                      | -                          |      |
| showTitle        | 是否显示原生 tooltip 页码提示                                | boolean                                                                      | true                       |      |
| showTotal        | 用于显示数据总量和当前数据顺序                               | function(total, range)                                                       | -                          |      |
| simple           | 当添加该属性时，显示为简单分页                               | boolean                                                                      | -                          |      |
| size             | 当为 `small` 时，是小尺寸分页                                | `default` \| `small`                                                         | `default`                  |      |
| total            | 数据总数                                                     | number                                                                       | 0                          |      |
| onChange         | 页码或 `pageSize` 改变的回调，参数是改变后的页码及每页条数   | function(page, pageSize)                                                     | -                          |      |
| onShowSizeChange | pageSize 变化的回调                                          | function(current, size)                                                      | -                          |      |
