---
toc: content
title: Cascader（级联）
nav:
  title: 组件
group:
  title: 数据录入
  order: 4
demo:
  cols: 2
---

# Cascader（级联）

级联选择框。

## 代码演示

<code src="./basic.tsx" description="省市区级联。">基本使用</code>
<code src="./default.tsx" description="默认值通过数组的方式指定。">默认值</code>
<code src="./custom-trigger.tsx" description="切换按钮和结果分开。">可以自定义显示</code>
<code src="./hover.tsx" description="通过移入展开下级菜单，点击完成选择。">移入展开</code>
<code src="./disabled-option.tsx" description="通过指定 options 里的 `disabled` 字段。">禁用选项</code>
<code src="./change-on-select.tsx" description="这种交互允许只选中父级选项。">选择即改变</code>
<code src="./multiple.tsx" description="一次性选择多个选项。通过添加 `disableCheckbox` 属性,选择具体某一个checkbox禁用 。可以通过类名修改禁用的样式。">多选</code>
<code src="./showCheckedStrategy.tsx" description="通过设置 `ShowCheckedStrategy` 选择回填方式。">自定义回填方式</code>
<code src="./size.tsx" description="不同大小的级联选择器。">大小</code>
<code src="./custom-render.tsx" description="例如给最后一项加上邮编链接。">自定义已选项</code>
<code src="./search.tsx" description="可以直接搜索选项并选择。">搜索</code>
<code src="./multiple-search.tsx" description="多选模式下也支持搜索。">checkbox 搜索</code>
<code src="./lazy.tsx" description="使用 loadData 实现动态加载选项。">动态加载选项</code>
<code src="./fields-name.tsx" description="自定义字段名。">自定义字段名</code>
<code src="./custom-dropdown.tsx" description="使用 `dropdownRender` 对下拉菜单进行自由扩展。">扩展菜单</code>
<code src="./placement.tsx" description="可以通过 `placement` 手动指定弹出的位置。">弹出位置</code>
<code src="./status.tsx" description="使用 `status` 为 Cascader 添加状态，可选 `error` 或者 `warning`。">自定义状态</code>

# API

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否支持清除 | boolean | true |  |
| autoFocus | 自动获取焦点 | boolean | false |  |
| bordered | 是否有边框 | boolean | true |  |
| clearIcon | 自定义的选择框清空图标 | ReactNode | - |  |
| changeOnSelect | （单选时生效）当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | boolean | false |  |
| className | 自定义类名 | string | - |  |
| defaultValue | 默认的选中项 | string\[] \| number\[] | \[] |  |
| disabled | 禁用 | boolean | false |  |
| displayRender | 选择后展示的渲染函数 | (label, selectedOptions) => ReactNode | label => label.join(`/`) |  |
| tagRender | 自定义 tag 内容 render，仅在多选时生效 | ({ label: string, onClose: function, value: string }) => ReactNode | - |  |
| popupClassName | 自定义浮层类名 | string | - | |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - |  |
| expandIcon | 自定义次级菜单展开图标 | ReactNode | - |  |
| expandTrigger | 次级菜单的展开方式，可选 'click' 和 'hover' | string | `click` |  |
| fieldNames | 自定义 options 中 label value children 的字段 | object | { label: `label`, value: `value`, children: `children` } |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | function(triggerNode) | () => document.body |  |
| loadData | 用于动态加载选项，无法与 `showSearch` 一起使用 | (selectedOptions) => void | - |  |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - |  |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) | - |  |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - |  |
| notFoundContent | 当下拉列表为空时显示的内容 | string | `Not Found` |  |
| open | 控制浮层显隐 | boolean | - |  |
| options | 可选项数据源 | [Option](#option)\[] | - |  |
| placeholder | 输入框占位文本 | string | `请选择` |  |
| placement | 浮层预设位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | `bottomLeft` |  |
| showSearch | 在选择框中显示搜索框 | boolean \| [Object](#showsearch) | false |  |
| size | 输入框大小 | `large` \| `middle` \| `small` | - |  |
| status | 设置校验状态 | 'error' \| 'warning' | - |  |
| style | 自定义样式 | CSSProperties | - |  |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |  |
| value | 指定选中项 | string\[] \| number\[] | - |  |
| onChange | 选择完成后的回调 | (value, selectedOptions) => void | - |  |
| onDropdownVisibleChange | 显示/隐藏浮层的回调 | (value) => void | - |  |
| multiple | 支持多选节点 | boolean | - |  |
| showCheckedStrategy | 定义选中项回填的方式。`Cascader.SHOW_CHILD`: 只显示选中的子节点。`Cascader.SHOW_PARENT`: 只显示父节点（当父节点下所有子节点都选中时）。 | `Cascader.SHOW_PARENT` \| `Cascader.SHOW_CHILD` | `Cascader.SHOW_PARENT` |  |
| removeIcon | 自定义的多选框清除图标 | ReactNode | - |  |
| searchValue | 设置搜索的值，需要与 `showSearch` 配合使用 | string | - |  |
| onSearch | 监听搜索，返回输入的值 | (search: string) => void | - |  |
| dropdownMenuColumnStyle | 下拉菜单列的样式 | CSSProperties | - |  |

### showSearch

`showSearch` 为对象时，其中的字段：

<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| filter | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false | function(inputValue, path): boolean | - |  |
| limit | 搜索结果展示数量 | number \| false | 50 |  |
| matchInputWidth | 搜索结果列表是否与输入框同宽 | boolean | true |  |
| render | 用于渲染 filter 后的选项 | function(inputValue, path): ReactNode | - |  |
| sort | 用于排序 filter 后的选项 | function(a, b, inputValue) | - |  |

### Option

```typescript
interface Option {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
  // 标记是否为叶子节点，设置了 `loadData` 时有效
  // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
  isLeaf?: boolean;
}
```

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |

> 注意，如果需要获得中国省市区数据，可以参考 [china-division](https://gist.github.com/user/7582f35654fd03d5be7009444345ea17)。
