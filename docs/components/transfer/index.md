---
toc: content
title: Transfer（穿梭框）
nav:
  title: 组件
group:
  title: 数据展示
demo:
  cols: 2
---

# Transfer（穿梭框）

穿梭选择框。

## 代码演示

<code src="./basic.tsx" description="最基本的用法。">基本用法</code>
<code src="./sort.tsx" description="结果列可以拖动。">可拖动</code>
<code src="./all-selected.tsx" description="通过传入`allSelectLabel`定义文案，并支持全选功能。">全选</code>
<code src="./remove.tsx" description="`removable`支持移除，默认开启。">禁用移除</code>
<code src="./show-count.tsx" description="`showCount`显示计数默认开启，可关闭。">显示选中计数</code>
<code src="./allow-clear.tsx" description="`allowClear`开启清空功能。">清空</code>
<code src="./tree.tsx" description="支持树状结构的展示。">树状</code>
<code src="./check-strictly.tsx" description="`checkStrictly`同tree属性。">父子节点不关联。</code>

## API

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allSelectLabel | 展示全选 | React.ReactNode |  | |
| value | 绑定值 | string[] |  | |
| height | 高度 | number  | 379 | |
| defaultValue | 默认绑定值 | string[] |  | |
| options | 选择项，可直接传字符串数组或者对象数组 | [TreeLabelValueItemInterface](#treelbelvalueiteminterface)[] | [] | |
| onRemove | 移除回调 | (item: string[]) => void |  | |
| sortable | 支持排序 | boolan | false | |
| removable | 支持移除 | boolan | true | |
| showCount | 显示选中计数 | boolan | true  | |
| allowClear | 清空 | boolan | false | |
| allowClearText | 清空文案 | string | '清空' | |
| labelKey | 列表label字段的关键值 | string |  | |
| valueKey | 列表value字段的关键值 | string |  | |
| noContentText | 列表空状态显示 | string |  | |
| noResultText | 搜索条件未命中显示 | string |  | |
| checkListDescriptionText | 左侧描述文字 | string |  | |
| sortListDescriptionText | 右侧描述文字 | string |  | |
| placeholder | 搜索占位 | string |  | |
| filterList | 列表筛选 | [filterList](#filterlist) |  | |
| filterTreeList | 过滤数列表 | [filterTreeList](#filtertreelist) |  | |
| renderSortItem | 自定义渲染排序单元 | [类型](#rendersortitem) | | |
| checkStrictly | 父节点与子节点脱离关系 | boolean |  | |
| noTreeIcon |不需要tree icon | boolean | | |
| treeProps | 额外需要配置的tree属性 | [TreeProps](/components/tree#tree-props) | | |

### LabelValueItemInterface

```js
interface LabelValueItemInterface {
  label?: string;
  value?: string;
  [key: string]: any;
}
```

### filterList

```js
type filterList = (
  options: LabelValueItemInterface,
  search: string,
) => LabelValueItemInterface[];
```

### filterTreeList

```js
type filterTreeList = (
  options: TreeLabelValueItemInterface[],
  search: string,
) => TreeLabelValueItemInterface[];
```

### renderSortItem

```js
type SortListRenderItemType = (
  provided: DraggableProvided,
  item: SortListItemType,
  index: number,
  isDraging: boolean,
  style?: React.CSSProperties,
) => React.ReactElement;
```
