---
toc: content
title: SortList（可排序列表）
nav:
  title: 组件
group:
  title: 数据展示
demo:
  cols: 2
---

# SortList（可排序列表）

可以拖动排序的列表。

## 代码演示

<code src="./basic.tsx" description="最基本的用法。">基本用法</code>
<code src="./remove.tsx" description="`removeable`控制列表的移除。">可以移除的列表</code>
<code src="./virtual.tsx" description="`useVirtual`可开启虚拟滚动，请根据实际需要开启。">虚拟滚动</code>

## API

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| list | 受控数据源 | [SortListItemType](#sortlistitemtype)[] |  | |
| defaultList | 默认数据源 | [SortListItemType](#sortlistitemtype)[] |  | | 
| onChange | (items: [SortListItemType](#sortlistitemtype)[], dragResult?: DropResult) => void; | React.ReactNode | - | |
| listWidth | 列表宽度 | number |  | |
| listHeight | 设置列表高度 | number | - | |
| renderItem | 自定义渲染单元 | [RenderItemType](#renderitemtype) |  | |
| removable | 可以删除 | boolean |  | |
| onChange | 选项变化时的回调函数 | (selected: any[]) => void |  | |
| labelKey | 列表label字段的关键值 | string |  | |
| valueKey | 列表value字段的关键值 | string |  | |
| rowHeight | 每一列的高度 | number | 36 | |
| useVirtual | 启用虚拟滚动 | boolean | false | |

### SortListItemType

```js
type SortListItemType =
  | {
      label?: string,
      value?: string,
      [key: string]: any,
    }
  | string;
```

### RenderItemType

```js
type RenderItemType = (
  provided: DraggableProvided,
  item: SortListItemType,
  index: number,
  isDraging: boolean,
  style?: React.CSSProperties,
) => React.ReactElement;
```
