---
toc: content
title: CheckList（复选列表）
nav:
  title: 组件
group:
  title: 数据展示
demo:
  cols: 2
---

# CheckList（复选列表）

复选框列表。

## 代码演示

<code src="./basic.tsx" description="带搜索的列表。">基本用法</code>
<code src="./tree.tsx" description="提供`TreeCheckList`渲染tree结构。">树状列表</code>
<code src="./hide-search.tsx" description="`hideSearch`可隐藏搜索">隐藏搜索栏</code>
<code src="./text.tsx" description="传入`text`在头部增加列表的描述。">带有标题的列表</code>
<code src="./all-select.tsx" description="提供全选的功能，传入文案即拥有此功能。">提供全选</code>
<code src="./borderless.tsx" description="无边框模式。">无边框模式</code>
<code src="./loading.tsx" description="加载中。">列表加载</code>
<code src="./virtualized.tsx" description="`CheckList`支持虚拟滚动。">虚拟列表</code>
<code src="./filter.tsx" description="设置自定义筛选函数，通过 value 搜索列。">自定义筛选</code>
<code src="./show-checkbox.tsx" description="`showCheckbox`隐藏勾选。">隐藏勾选框</code>
<code src="./radio.tsx" description="`radio`使列表单选。">设置单选</code>
<code src="./width.tsx" description="`width`默认`200`。">自定义宽度</code>
<code src="./show-tip.tsx" description="`showTip`使文字过长是通过tooltip展示，效果如同`TooltipText`，默认开启。">文案过长自动隐藏展示</code>

## API

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| hideSearch | 搜索栏的显隐 | boolean | false | |
| radio | 列表单选(使用allSelectLabel后该属性失效) | boolean | false | | 
| text | 设置列表的标题 | React.ReactNode | - | |
| listHeight | 设置列表高度 | number | - | |
| loading | 列表加载 | boolean | false | |
| value | 绑定值 | string[] |  | |
| defaultValue | 默认绑定值 | string[] |  | |
| allSelectLabel | 提供全选的功能，传入文案即拥有此功能 | React.ReactNode |  | |
| options | 选择项，可直接传字符串数组或者对象数组 | any[] | [] | |
| onChange | 选项变化时的回调函数 | (selected: any[]) => void |  | |
| listDescriptionClassName | 标题类名 | string |  | |
| labelKey | 列表label字段的关键值 | string |  | |
| valueKey | 列表value字段的关键值 | string |  | |
| maxHeight | 列表的最大高度 | number | 330 | |
| rowHeight | 每一列的高度 | number | 36 | |
| flexHeight | 是否自适应高度（会使最大高度失效） | boolean |  | |
| noContentText | 列表空状态显示 | string |  | |
| noResultText | 搜索条件未命中显示 | string |  | |
| placeholder | 搜索占位 | string |  | |
| filterList | 列表筛选 | (options: any, search: string) => any[] |  | |
| filterItem | 列筛选 | (val: any, search: string) => boolean |  | |
| renderer | 自定义渲染列显示 | [类型](/renderer) | | |
| showCheckbox | 列表勾选框显隐 | boolean | true | |
| dynamicRowHeight | 列表动态高度（同 Table） | boolean | | |
| minRowHeight | 列高度最小值 | number | | |
| searchExtra | 搜索后缀 | React.ReactNode | | |
| showTip | 是否显示 tip 提示 | boolean | true | |
| width | 宽度 | number | 200 | |
| borderless | 无边框模式 | boolean | false | |

### TreeCheckListProps

> 更多属性参考[TreeProps](/components/tree#tree-props)

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| hideSearch | 搜索栏的显隐 | boolean | false | |
| listHeight | 设置列表高度 | number | - | |
| loading | 列表加载 | boolean | false | |
| value | 绑定值 | string[] |  | |
| defaultValue | 默认绑定值 | string[] |  | |
| options | 选择项，可直接传字符串数组或者对象数组 | TreeLabelValueItemInterface[] | [] | |
| onChange | 选项变化时的回调函数 | (selected: string[]) => void |  | |
| itemClassName | 列表单元的类名 | string |  | |
| labelKey | 列表label字段的关键值 | string |  | |
| valueKey | 列表value字段的关键值 | string |  | |
| maxHeight | 列表的最大高度 | number | 330 | |
| rowHeight | 每一列的高度 | number | 36 | |
| flexHeight | 是否自适应高度（会使最大高度失效） | boolean |  | |
| noContentText | 列表空状态显示 | string |  | |
| noResultText | 搜索条件未命中显示 | string |  | |
| placeholder | 搜索占位 | string |  | |
| filterList | 列表筛选 | (options: any, search: string) => any[] |  | |
| filterItem | 列筛选 | (val: any, search: string) => boolean |  | |
| width | 宽度 | number |  | |
| checkable | 列表勾选框显隐 | boolean | true | |
| noTreeIcon | 不需要tree图标 | boolean |  | |

### renderer

```js
  /** 自定义渲染列显示 */
  renderer?: (
    checked: boolean,
    title: string,
    value: string,
    item: any,
  ) => React.ReactNode;
```
