---
toc: content
title: Breadcrumb（面包屑）
nav:
  title: 组件
group:
  title: 导航
demo:
  cols: 2
---

# Breadcrumb（面包屑）

显示当前页面在系统层级结构中的位置，并能向上返回。

## 代码演示

<code src="./basic.tsx" description="最简单的用法。">基本</code>
<code src="./icon.tsx" description="图标放在文字前面。">带有图标的</code>
<code src="./dropdown.tsx" description="面包屑支持下拉菜单。">下拉菜单</code>
<code src="./separator.tsx" description="使用 `separator='>'` 可以自定义分隔符。">分隔符</code>
<code src="./sepatator-component.tsx" >自定义分隔符</code>

## API

### Breadcrumb

| 参数       | 说明                                     | 类型                                        | 默认值 | 版本 |
| ---------- | ---------------------------------------- | ------------------------------------------- | ------ | ---- |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route, params, routes, paths) => ReactNode | -      |      |
| params     | 路由的参数                               | object                                      | -      |      |
| items      | 路由栈信息                               | [items\[\]](#ItemType)                      | -      |      |
| separator  | 分隔符自定义                             | ReactNode                                   | `/`    |      |

### ItemType

> type ItemType = [RouteItemType](#RouteItemType) | [SeparatorType](#SeparatorType)

### RouteItemType

| 参数          | 说明                     | 类型                               | 默认值            | 版本 |
| ------------- | ------------------------ | ---------------------------------- | ----------------- | ---- |
| className     | 自定义类名               | string                             | -                 |      |
| dropdownProps | 弹出下拉菜单的自定义配置 | [Dropdown](/components/dropdown)   | -                 |      |
| dropdownIcon  | 自定义下拉图标           | boolean \| ReactNode               | `<ChevronIcon />` |      |
| href          | 链接的目的地             | string                             | -                 |      |
| menu          | 菜单配置项               | [MenuProps](/components/menu#menu) | -                 |      |
| onClick       | 单击事件                 | (e:MouseEvent) => void             | -                 |      |
| title         | 名称                     | ReactNode                          | -                 |      |

### SeparatorType

```ts
const item = {
  type: 'separator', // Must have
  separator: '/',
};
```

| 参数      | 说明           | 类型        | 默认值 | 版本 |
| --------- | -------------- | ----------- | ------ | ---- |
| type      | 标记为分隔符   | `separator` |        |      |
| separator | 要显示的分隔符 | ReactNode   | `/`    |      |

### 和 browserHistory 配合

和 react-router 一起使用时，默认生成的 url 路径是带有 `#` 的，如果和 browserHistory 一起使用的话，你可以使用 `itemRender` 属性定义面包屑链接。

```js
import { Link } from 'react-router';

const items = [
  {
    path: 'index',
    title: 'home',
  },
  {
    path: 'first',
    title: 'first',
    children: [
      {
        path: '/general',
        title: 'General',
      },
      {
        path: '/layout',
        title: 'Layout',
      },
      {
        path: '/navigation',
        title: 'Navigation',
      },
    ],
  },
  {
    path: 'second',
    title: 'second',
  },
];
function itemRender(item, params, items, paths) {
  const last = items.indexOf(item) === items.length - 1;
  return last ? (
    <span>{item.title}</span>
  ) : (
    <Link to={paths.join('/')}>{item.title}</Link>
  );
}

return <Breadcrumb itemRender={itemRender} items={items} />;
```
