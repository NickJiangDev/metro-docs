---
toc: content
title: Table（表格）
nav:
  title: 组件
group:
  title: 数据展示
---

# Table（表格）

展示行列数据。

## 如何使用

指定表格的数据源 `dataSource` 为一个数组。

```js
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

<Table dataSource={dataSource} columns={columns} />;
```

## 代码演示

<code src="./basic.tsx" description="简单的表格，最后一列是各种操作。">基本用法</code>
<code src="./empty.tsx" description="使用`locale`可以控制Table的文字展示，更多配置请参考[配置项](#locale)<br />`locale.emptyText`为`false`时不渲染">Empty 空状态</code>
<code src="./row-selection.tsx"  description="第一列是联动的选择框。可以通过 `rowSelection.type` 属性指定选择类型，默认为 `checkbox`。">可选择</code>
<code src="./row-selection-and-operation.tsx" description="选择后进行操作，完成后清空选择，通过 rowSelection.selectedRowKeys 来控制选中项。">选择和操作</code>
<code src="./row-selection-custom.tsx" description="通过 `rowSelection.selections` 自定义选择项，默认不显示下拉选项，设为 `true` 时显示默认选择项。">自定义选择项</code>
<code src="./head.tsx" description="对某一列数据进行筛选，使用列的 `filters` 属性来指定需要筛选菜单的列，`onFilter` 用于筛选当前数据，`filterMultiple` 用于指定多选和单选。对某一列数据进行排序，通过指定列的 `sorter` 函数即可启动排序按钮。`sorter: function(rowA, rowB) { ... }`， rowA、rowB 为比较的两个行数据。sortDirections: ['ascend' | 'descend']改变每列可用的排序方式，切换排序时按数组内容依次切换，设置在 table props 上时对所有列生效。你可以通过设置 `['ascend', 'descend', 'ascend']` 禁止排序恢复到默认状态。使用 `defaultSortOrder` 属性，设置列的默认排序顺序。">筛选和排序</code>
<code src="./filter-in-tree.tsx" description="可以使用 `filterMode` 来修改筛选菜单的 UI，可选值有 `menu`（默认）和 `tree`。">树型筛选菜单</code>
<code src="./filter-search.tsx" description="`filterSearch` 用于开启筛选项的搜索，通过 `filterSearch:(input, record) => boolean` 设置自定义筛选方法">自定义筛选的搜索</code>
<code src="./multiple-sorter.tsx" description="`column.sorter` 支持 `multiple` 字段以配置多列排序优先级。通过 `sorter.compare` 配置排序逻辑，你可以通过不设置该函数只启动多列排序的交互形式。">多列排序</code>
<code src="./reset-filter.tsx" description="使用受控属性对筛选和排序状态进行控制。 1. columns 中定义了 filteredValue 和 sortOrder 属性即视为受控模式。2. 只支持同时对一列进行排序，请保证只有一列的 sortOrder 属性是生效的。3. 务必指定 `column.key`。">可控的筛选和排序</code>
<code src="./size.tsx" description="样式梯度。">紧凑型和宽松型</code>
<code src="./bordered.tsx" description="添加表格边框线，页头和页脚。">带边框</code>
<code src="./expand.tsx" description="当表格内容较多不能一次性完全展示时。">可展开</code>
<code src="./order-column.tsx" description="你可以通过 `Table.EXPAND_COLUMN` 和 `Table.SELECT_COLUMN` 来控制选择和展开列的顺序。">特殊列排序</code>
<code src="./colspan-rowspan.tsx" description="表头只支持列合并，使用 `column` 里的 `colSpan` 进行设置。表格支持行/列合并，使用 `render` 里的单元格属性 `colSpan` 或者 `rowSpan` 设值为 `0` 时，设置的表格不会渲染。">表格行/列合并</code>
<code src="./tree-data.tsx" description="表格支持树形数据的展示，当数据中有 `children` 字段时会自动展示为树形表格，如果不需要或配置为其他字段可以用 `childrenColumnName` 进行配置。可以通过设置 `indentSize` 以控制每一层的缩进宽度。">树形数据展示</code>
<code src="./fixed-header.tsx" description="方便一页内展示大量数据。需要指定 `column` 的 `width` 属性，否则列头和内容可能不对齐。如果指定 `width` 不生效或出现白色垂直空隙，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。">固定表头</code>
<code src="./fixed-columns.tsx" description="对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 `scroll.x` 配合使用。">固定列</code>
<code src="./fixed-columns-header.tsx" description="适合同时展示有大量数据和数据列。">固定头和列</code>
<code src="./grouping-columns.tsx" description="`columns[n]` 可以内嵌 `children`，以渲染分组表头。">表头分组</code>
<code src="./nested-table.tsx" description="展示每行数据更详细的信息。">嵌套子表格</code>
<code src="./drag-sorting.tsx" description="使用自定义元素，我们可以集成 `dnd-kit` 来实现拖拽排序。">拖拽排序</code>
<code src="./drag-sorting-handler.tsx" description="使用 `dnd-kit` 来实现一个拖拽操作列。">拖拽手柄列</code>
<code src="./ellipsis.tsx" description="设置 `column.ellipsis` 可以让单元格内容根据宽度自动省略。">单元格自动省略</code>
<code src="./ellipsis-custom-tooltip.tsx" description="设置 `column.ellipsis.showTitle` 关闭单元格内容自动省略后默认的 `title` 提示, 使用 `Tooltip` 替代。">自定义单元格省略提示</code>
<code src="./summary.tsx" description="通过 `summary` 设置总结栏。使用 `Table.Summary.Cell` 同步 `Column` 的固定状态。你可以通过配置 `Table.Summary` 的 `fixed` 属性使其固定">总结栏</code>
<code src="./responsive.tsx" description="`响应式配置列的展示。`">响应式</code>
<code src="./pagination.tsx" description="表格的分页设置。">分页设置</code>
<code src="./sticky.tsx" description="对于长表格，需要滚动才能查看表头和滚动条，那么现在可以设置跟随页面固定表头和滚动条。">随页面滚动的固定表头和滚动条</code>

## API

### Table

| 参数              | 说明                                                                                 | 类型                                                                                                               | 默认值                                                             | 版本 |
| ----------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ---- |
| bordered          | 是否展示外边框和列边框                                                               | boolean                                                                                                            | false                                                              |      |
| columns           | 表格列的配置描述，具体项见下表                                                       | [ColumnsType](#column)\[]                                                                                          | -                                                                  |      |
| components        | 覆盖默认的 table 元素                                                                |                                                                                                                    | -                                                                  |      |
| dataSource        | 数据数组                                                                             | object\[]                                                                                                          | -                                                                  |      |
| expandable        | 配置展开属性                                                                         | [expandable](#expandable)                                                                                          | -                                                                  |      |
| footer            | 表格尾部                                                                             | function(currentPageData)                                                                                          | -                                                                  |      |
| getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单                                             | (triggerNode) => HTMLElement                                                                                       | () => TableHtmlElement                                             |      |
| loading           | 页面是否加载中                                                                       | boolean \| Spin Props                                                                                              | false                                                              |      |
| locale            | 默认文案设置，目前包括排序、过滤、空数据文案，[配置项](#locale)                      | object                                                                                                             |                                                                    |      |
| pagination        | 分页器，参考[配置项](#pagination)或 pagination 文档，设为 false 时不展示和进行分页   | object \| `false`                                                                                                  | -                                                                  |      |
| rowClassName      | 表格行的类名                                                                         | function(record, index): string                                                                                    | -                                                                  |      |
| rowKey            | 表格行 key 的取值，可以是字符串或一个函数                                            | string \| function(record): string                                                                                 | `key`                                                              |      |
| rowSelection      | 表格行是否可选择，[配置项](#rowselection)                                            | object                                                                                                             | -                                                                  |      |
| scroll            | 表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll)                        | object                                                                                                             | -                                                                  |      |
| showHeader        | 是否显示表头                                                                         | boolean                                                                                                            | true                                                               |      |
| showSorterTooltip | 表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性 | boolean \| Tooltip props                                                                                           | true                                                               |      |
| size              | 表格大小                                                                             | `large` \| `middle` \| `small`                                                                                     | `large`                                                            |      |
| sortDirections    | 支持的排序方式，取值为 `ascend` `descend`                                            | Array                                                                                                              | \[`ascend`, `descend`]                                             |      |
| sticky            | 设置粘性头部和滚动条                                                                 | boolean \| `{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}`                      | -                                                                  |      |
| summary           | 总结栏                                                                               | (currentData) => ReactNode                                                                                         | -                                                                  |      |
| tableLayout       | 表格元素的 table-layout 属性，设为 `fixed` 表示内容不会影响列的布局                  | - \| `auto` \| `fixed`                                                                                             | 无<hr />固定表头/列或使用了 `column.ellipsis` 时，默认值为 `fixed` |      |
| title             | 表格标题                                                                             | function(currentPageData)                                                                                          | -                                                                  |      |
| onChange          | 分页、排序、筛选变化时触发                                                           | function(pagination, filters, sorter, extra: { currentDataSource: \[], action: `paginate` \| `sort` \| `filter` }) | -                                                                  |      |
| onHeaderRow       | 设置头部行属性                                                                       | function(columns, index)                                                                                           | -                                                                  |      |
| onRow             | 设置行属性                                                                           | function(record, index)                                                                                            | -                                                                  |      |

#### onRow 用法

适用于 `onRow` `onHeaderRow` `onCell` `onHeaderCell`。

```js
<Table
  onRow={(record) => {
    return {
      onClick: (event) => {}, // 点击行
      onDoubleClick: (event) => {},
      onContextMenu: (event) => {},
      onMouseEnter: (event) => {}, // 鼠标移入行
      onMouseLeave: (event) => {},
    };
  }}
  onHeaderRow={(columns, index) => {
    return {
      onClick: () => {}, // 点击表头行
    };
  }}
/>
```

### Column

列描述数据对象，是 columns 中的一项，Column 使用相同的 API。

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 设置列的对齐方式 | `left` \| `right` \| `center` | `left` |  |
| className | 列样式类名 | string | - |  |
| colSpan | 表头列合并,设置为 0 时，不渲染 | number | - |  |
| dataIndex | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | string \| string\[] | - |  |
| defaultFilteredValue | 默认筛选值 | string\[] | - |  |
| filterResetToDefaultFilteredValue | 点击重置按钮的时候，是否恢复默认筛选值 | boolean | false |  |
| defaultSortOrder | 默认排序顺序 | `ascend` \| `descend` | - |  |
| ellipsis | 超过宽度将自动省略，暂不支持和排序筛选一起使用。<br />设置为 `true` 或 `{ showTitle?: boolean }` 时，表格布局将变成 `tableLayout="fixed"`。 | boolean \| { showTitle?: boolean } | false |  |
| filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | ReactNode \| (props: FilterDropdownProps) => ReactNode | - |  |
| filterDropdownOpen | 用于控制自定义筛选菜单是否可见 | boolean | - |  |
| filtered | 标识数据是否经过过滤，筛选图标会高亮 | boolean | false |  |
| filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string\[] | - |  |
| filterIcon | 自定义 filter 图标。 | ReactNode \| (filtered: boolean) => ReactNode | false |  |
| filterMultiple | 是否多选 | boolean | true |  |
| filterMode | 指定筛选菜单的用户界面 | 'menu' \| 'tree' | 'menu' | |
| filterSearch | 筛选菜单项是否可搜索 | boolean \| function(input, record):boolean | false |  |
| filters | 表头的筛选菜单项 | object\[] | - |  |
| fixed | （IE 下无效）列是否固定，可选 true (等效于 left) `left` `right` | boolean \| string | false |  |
| key | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string | - |  |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引 | function(text, record, index) {} | - |  |
| responsive | 响应式 breakpoint 配置列表。未设置则始终可见。 |  | - |  |
| rowScope | 设置列范围 | `row` \| `rowgroup` | - |  |
| shouldCellUpdate | 自定义单元格渲染时机 | (record, prevRecord) => boolean | - |  |
| showSorterTooltip | 表头显示下一次排序的 tooltip 提示, 覆盖 table 中 `showSorterTooltip` | boolean \|  | true |  |
| sortDirections | 支持的排序方式，覆盖 `Table` 中 `sortDirections`， 取值为 `ascend` `descend` | Array | \[`ascend`, `descend`] |  |
| sorter | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | function \| boolean | - |  |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `ascend` `descend` `null` | `ascend` \| `descend` \| null | - |  |
| title | 列头显示文字 | ReactNode \| ({ sortOrder, sortColumn, filters }) => ReactNode | - |  |
| width | 列宽度 | string \| number | - |  |
| onCell | 设置单元格属性 | function(record, rowIndex) | - |  |
| onFilter | 本地模式下，确定筛选的运行函数 | function | - |  |
| onFilterDropdownOpenChange | 自定义筛选菜单可见变化时调用 | function(visible) {} | - |  |  |
| onHeaderCell | 设置头部单元格属性 | function(column) | - |  |

### ColumnGroup

| 参数  | 说明         | 类型      | 默认值 |
| ----- | ------------ | --------- | ------ |
| title | 列头显示文字 | ReactNode | -      |

### pagination

分页的配置项。

| 参数     | 说明                                                                                                                | 类型  | 默认值           |
| -------- | ------------------------------------------------------------------------------------------------------------------- | ----- | ---------------- |
| position | 指定分页显示的位置， 取值为`topLeft` \| `topCenter` \| `topRight` \|`bottomLeft` \| `bottomCenter` \| `bottomRight` | Array | \[`bottomRight`] |

### expandable

展开功能的配置。

| 参数                   | 说明                                           | 类型                                                 | 默认值   | 版本 |
| ---------------------- | ---------------------------------------------- | ---------------------------------------------------- | -------- | ---- |
| childrenColumnName     | 指定树形结构的列名                             | string                                               | children |      |
| columnTitle            | 自定义展开列表头                               | ReactNode                                            | -        |      |
| columnWidth            | 自定义展开列宽度                               | string \| number                                     | -        |      |
| defaultExpandAllRows   | 初始时，是否展开所有行                         | boolean                                              | false    |      |
| defaultExpandedRowKeys | 默认展开的行                                   | string\[]                                            | -        |      |
| expandedRowClassName   | 展开行的 className                             | function(record, index, indent): string              | -        |      |
| expandedRowKeys        | 展开的行，控制属性                             | string\[]                                            | -        |      |
| expandedRowRender      | 额外的展开行                                   | function(record, index, indent, expanded): ReactNode | -        |      |
| expandIcon             | 自定义展开图标                                 | function(props): ReactNode                           | -        |      |
| expandRowByClick       | 通过点击行来展开子行                           | boolean                                              | false    |      |
| fixed                  | 控制展开图标是否固定，可选 true `left` `right` | boolean \| string                                    | false    |      |
| indentSize             | 展示树形数据时，每层缩进的宽度，以 px 为单位   | number                                               | 15       |      |
| rowExpandable          | 设置是否允许行展开                             | (record) => boolean                                  | -        |      |
| showExpandColumn       | 设置是否展示行展开列                           | boolean                                              | true     |      |
| onExpand               | 点击展开图标时触发                             | function(expanded, record)                           | -        |      |
| onExpandedRowsChange   | 展开的行变化时触发                             | function(expandedRows)                               | -        |      |

### rowSelection

选择功能的配置。

| 参数                    | 说明                                                            | 类型                                                    | 默认值     | 版本 |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------------------------- | ---------- | ---- |
| checkStrictly           | checkable 状态下节点选择完全受控（父子数据选中状态不再关联）    | boolean                                                 | true       |      |
| columnTitle             | 自定义列表选择框标题                                            | ReactNode                                               | -          |      |
| columnWidth             | 自定义列表选择框宽度                                            | string \| number                                        | `32px`     |      |
| fixed                   | 把选择框列固定在左边                                            | boolean                                                 | -          |      |
| getCheckboxProps        | 选择框的默认属性配置                                            | function(record)                                        | -          |      |
| hideSelectAll           | 隐藏全选勾选框与自定义选择项                                    | boolean                                                 | false      |      |
| preserveSelectedRowKeys | 当数据被删除时仍然保留选项的 `key`                              | boolean                                                 | -          |      |
| renderCell              | 渲染勾选框，用法与 Column 的 `render` 相同                      | function(checked, record, index, originNode) {}         | -          |      |
| selectedRowKeys         | 指定选中项的 key 数组，需要和 onChange 进行配合                 | string\[] \| number\[]                                  | \[]        |      |
| defaultSelectedRowKeys  | 默认选中项的 key 数组                                           | string\[] \| number\[]                                  | \[]        |      |
| selections              | 自定义选择项 [配置项](#selection), 设为 `true` 时使用默认选择项 | object\[] \| boolean                                    | true       |      |
| type                    | 多选/单选                                                       | `checkbox` \| `radio`                                   | `checkbox` |      |
| onChange                | 选中项发生变化时的回调                                          | function(selectedRowKeys, selectedRows, info: { type }) | -          |      |
| onSelect                | 用户手动选择/取消选择某行的回调                                 | function(record, selected, selectedRows, nativeEvent)   | -          |      |
| onSelectAll             | 用户手动选择/取消选择所有行的回调                               | function(selected, selectedRows, changeRows)            | -          |      |
| onSelectInvert          | 用户手动选择反选的回调                                          | function(selectedRowKeys)                               | -          |      |
| onSelectNone            | 用户清空选择的回调                                              | function()                                              | -          |      |
| onSelectMultiple        | 用户使用键盘 shift 选择多行的回调                               | function(selected, selectedRows, changeRows)            | -          |      |

### scroll

| 参数                     | 说明                                                                                                                                                          | 类型                     | 默认值 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------ |
| scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部                                                                                                                    | boolean                  | -      |
| x                        | 设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 ['max-content'](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content) | string \| number \| true | -      |
| y                        | 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值                                                                                                      | string \| number         | -      |

### selection

| 参数     | 说明                       | 类型                        | 默认值 |
| -------- | -------------------------- | --------------------------- | ------ |
| key      | React 需要的 key，建议设置 | string                      | -      |
| text     | 选择项显示的文字           | ReactNode                   | -      |
| onSelect | 选择项点击回调             | function(changeableRowKeys) | -      |

### locale

```js
export interface TableLocale {
  filterTitle?: string;
  filterConfirm?: React.ReactNode;
  filterReset?: React.ReactNode;
  filterEmptyText?: React.ReactNode;
  filterCheckall?: React.ReactNode;
  filterSearchPlaceholder?: string;
  emptyText?: React.ReactNode | (() => React.ReactNode) | boolean;
  selectAll?: React.ReactNode;
  selectNone?: React.ReactNode;
  selectInvert?: React.ReactNode;
  selectionAll?: React.ReactNode;
  sortTitle?: string;
  expand?: string;
  collapse?: string;
  triggerDesc?: string;
  triggerAsc?: string;
  cancelSort?: string;
}
```

## 在 TypeScript 中使用

```js
import { Table } from '@metro/components';
import type { ColumnsType } from '@metro/components';
import React from 'react';

interface User {
  key: number;
  name: string;
}

const columns: ColumnsType<User> = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
  },
];

const data: User[] = [
  {
    key: 0,
    name: 'Jack',
  },
];

const Demo: React.FC = () => (
  <>
    <Table<User> columns={columns} dataSource={data} />
    {/* 使用 JSX 风格的 API */}
    <Table<User> dataSource={data}>
      <Table.Column<User> key="name" title="Name" dataIndex="name" />
    </Table>
  </>
);

export default Demo;
```
