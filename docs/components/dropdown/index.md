---
toc: content
title: Dropdown（下拉菜单）
nav:
  title: 组件
group:
  title: 导航
demo:
  cols: 2
---

# Dropdown（下拉菜单）

向下弹出的列表。

## 代码演示

<code src="./basic.tsx" description="最简单的下拉菜单。">基本</code>
<code src="./placement.tsx" description="支持六个弹出位置">弹出位置</code>
<code src="./arrow.tsx" description="可以展示一个箭头。">箭头</code>
<code src="./item.tsx" description="分割线和不可用菜单项。">其他元素</code>
<code src="./click.tsx" description="默认是移入触发菜单，可以点击触发。">触发方式</code>
<code src="./cascading-menu.tsx" description="传入的菜单里有多个层级。">多级菜单</code>
<code src="./context-menu.tsx" description="默认是移入触发菜单，可以点击鼠标右键触发。">右键菜单</code>

## API

属性如下

| 参数               | 说明                                                                                                                                                        | 类型                                      | 默认值              | 版本 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------- | ---- |
| arrow              | 下拉框箭头是否显示                                                                                                                                          | boolean \| { pointAtCenter: boolean }     | false               |      |
| autoAdjustOverflow | 下拉框被遮挡时自动调整位置                                                                                                                                  | boolean                                   | true                |      |
| autoFocus          | 打开后自动聚焦下拉框                                                                                                                                        | boolean                                   | false               |      |
| disabled           | 菜单是否禁用                                                                                                                                                | boolean                                   | -                   |      |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown                                                                                                                                     | boolean                                   | false               |      |
| dropdownRender     | 自定义下拉框内容                                                                                                                                            | (menus: ReactNode) => ReactNode           | -                   |      |
| getPopupContainer  | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/user/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |      |
| menu               | 菜单配置项                                                                                                                                                  | [MenuProps](/components/menu#menu)        | -                   |      |
| overlayClassName   | 下拉根元素的类名称                                                                                                                                          | string                                    | -                   |      |
| overlayStyle       | 下拉根元素的样式                                                                                                                                            | CSSProperties                             | -                   |      |
| placement          | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight`                                                                                | string                                    | `bottomLeft`        |      |
| trigger            | 触发下拉的行为, 移动端不支持 hover                                                                                                                          | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`]          |      |
| open               | 菜单是否显示                                                                                                                                                | boolean                                   | -                   |      |
| onOpenChange       | 菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发。                                                                                                    | (open: boolean) => void                   | -                   |      |
