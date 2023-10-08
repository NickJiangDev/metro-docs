---
toc: content
title: Menu（导航菜单）
nav:
  title: 组件
group:
  title: 导航
  order: 4
---

# Menu（导航菜单）

为页面和功能提供导航的菜单列表。

## 开发者注意事项

- Menu 元素为 ul，因而仅支持 li 以及 script-supporting 子元素。因而你的子节点元素应该都在 Menu.Item 内使用。

- Menu 需要计算节点结构，因而其子元素仅支持 Menu.\* 以及对此进行封装的 HOC 组件。

- Submenu 可以通过`getPopupContainer`绑定 container

## 代码演示

<code src="./horzanital.tsx">顶部导航</code>

<code src="./inline.tsx" description="内嵌菜单，子菜单内嵌在菜单区域。">内嵌菜单</code>

<code src="./vertical.tsx">垂直菜单</code>

<code src="./inline-collapsed.tsx">缩起内嵌菜单</code>

<code src="./sider-current.tsx">只展开当前父级菜单</code>

## API

### Menu

| 参数                 | 说明                                           | 类型                                                                       | 默认值                 | 版本 |
| -------------------- | ---------------------------------------------- | -------------------------------------------------------------------------- | ---------------------- | ---- |
| defaultOpenKeys      | 初始展开的 SubMenu 菜单项 key 数组             | string\[]                                                                  | -                      |      |
| defaultSelectedKeys  | 初始选中的菜单项 key 数组                      | string\[]                                                                  | -                      |      |
| expandIcon           | 自定义展开图标                                 | ReactNode \| `(props: SubMenuProps & { isSubMenu: boolean }) => ReactNode` | -                      |      |
| forceSubMenuRender   | 在子菜单展示之前就渲染进 DOM                   | boolean                                                                    | false                  |      |
| inlineCollapsed      | inline 时菜单是否收起状态                      | boolean                                                                    | -                      |      |
| inlineIndent         | inline 模式的菜单缩进宽度                      | number                                                                     | 24                     |      |
| items                | 菜单内容                                       | [ItemType\[\]](#itemtype)                                                  | -                      |      |
| mode                 | 菜单类型，现在支持垂直、水平、和内嵌模式三种   | `vertical` \| `horizontal` \| `inline`                                     | `vertical`             |      |
| multiple             | 是否允许多选                                   | boolean                                                                    | false                  |      |
| openKeys             | 当前展开的 SubMenu 菜单项 key 数组             | string\[]                                                                  | -                      |      |
| overflowedIndicator  | 用于自定义 Menu 水平空间不足时的省略收缩的图标 | ReactNode                                                                  | `<EllipsisOutlined />` |      |
| selectable           | 是否允许选中                                   | boolean                                                                    | true                   |      |
| selectedKeys         | 当前选中的菜单项 key 数组                      | string\[]                                                                  | -                      |      |
| style                | 根节点样式                                     | CSSProperties                                                              | -                      |      |
| subMenuCloseDelay    | 用户鼠标离开子菜单后关闭延时，单位：秒         | number                                                                     | 0.1                    |      |
| subMenuOpenDelay     | 用户鼠标进入子菜单后开启延时，单位：秒         | number                                                                     | 0                      |      |
| triggerSubMenuAction | SubMenu 展开/关闭的触发行为                    | `hover` \| `click`                                                         | `hover`                |      |
| onClick              | 点击 MenuItem 调用此函数                       | function({ item, key, keyPath, domEvent })                                 | -                      |      |
| onDeselect           | 取消选中时调用，仅在 multiple 生效             | function({ item, key, keyPath, selectedKeys, domEvent })                   | -                      |      |
| onOpenChange         | SubMenu 展开/关闭的回调                        | function(openKeys: string\[])                                              | -                      |      |
| onSelect             | 被选中时调用                                   | function({ item, key, keyPath, selectedKeys, domEvent })                   | -                      |      |

> 更多属性查看 [rc-menu](https://github.com/react-component/menu#api)

### ItemType

> type ItemType = [MenuItemType](#MenuItemType) | [SubMenuType](#SubMenuType) | [MenuItemGroupType](#MenuItemGroupType) | [MenuDividerType](#MenuDividerType);

#### MenuItemType

| 参数     | 说明                     | 类型      | 默认值 | 版本 |
| -------- | ------------------------ | --------- | ------ | ---- |
| danger   | 展示错误状态样式         | boolean   | false  |      |
| disabled | 是否禁用                 | boolean   | false  |      |
| icon     | 菜单图标                 | ReactNode | -      |      |
| key      | item 的唯一标志          | string    | -      |      |
| label    | 菜单项标题               | ReactNode | -      |      |
| title    | 设置收缩时展示的悬浮标题 | string    | -      |      |

#### SubMenuType

| 参数           | 说明                                 | 类型                        | 默认值 | 版本 |
| -------------- | ------------------------------------ | --------------------------- | ------ | ---- |
| children       | 子菜单的菜单项                       | [ItemType\[\]](#itemtype)   | -      |      |
| disabled       | 是否禁用                             | boolean                     | false  |      |
| icon           | 菜单图标                             | ReactNode                   | -      |      |
| key            | 唯一标志                             | string                      | -      |      |
| label          | 菜单项标题                           | ReactNode                   | -      |      |
| popupClassName | 子菜单样式，`mode="inline"` 时无效   | string                      | -      |      |
| popupOffset    | 子菜单偏移量，`mode="inline"` 时无效 | \[number, number]           | -      |      |
| onTitleClick   | 点击子菜单标题                       | function({ key, domEvent }) | -      |      |

#### MenuItemGroupType

定义类型为 `group` 时，会作为分组处理:

```ts
const groupItem = {
  type: 'group', // Must have
  label: 'My Group',
  children: [],
};
```

| 参数     | 说明         | 类型                              | 默认值 | 版本 |
| -------- | ------------ | --------------------------------- | ------ | ---- |
| children | 分组的菜单项 | [MenuItemType\[\]](#menuitemtype) | -      |      |
| label    | 分组标题     | ReactNode                         | -      |      |

#### MenuDividerType

菜单项分割线，只用在弹出菜单内，需要定义类型为 `divider`：

```ts
const dividerItem = {
  type: 'divider', // Must have
};
```

| 参数   | 说明     | 类型    | 默认值 | 版本 |
| ------ | -------- | ------- | ------ | ---- |
| dashed | 是否虚线 | boolean | false  |      |
