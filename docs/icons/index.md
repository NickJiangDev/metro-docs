---
toc: content
title: 图标库
nav:
  title: 图标库
  order: 3
---

# 图标库

Metro design System 提供一套基础的图标组件。

## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**

```bash
$ npm install @metro/icons --save
```

```bash
$ yarn add @metro/icons
```

## 资源

> 你可以找到所有图标的设计资源 [这里](https://www.figma.com/file/IByWnh0BRhd2qc0nSKZmoi/MDS-Icon?node-id=3001%3A19077&t=aqDV7Thu5i0L2j7b-0)

## 展示

<code src="../_temp/icon-list.tsx"></code>

## 使用方式

```js
import React from 'react';
import { render } from 'react-dom';
import Add from '@metro/icons/dist/esm/react/Add';
import AddColumn from '@metro/icons/dist/esm/react/AddColumn';
import AiLab from '@metro/icons/dist/esm/react/AiLab';

const App = () => {
  return (
    <>
      <Add />
      <AddColumn />
      <AiLab />
    </>
  );
};

render(<App />, document.getElementById('root'));
```

### 可以添加 webpack alias 使引用路径变短

```js
addWebpackAlias({
  ['@icons']: path.resolve('./node_modules/@metro/icons/dist/esm/react'),
});
```

如果使用 ts，可以在 tsconfig 中配置：

```js
{
  "compilerOptions": {
  "baseUrl": ".",
  "paths": {
    "@icons": ["./node_modules/@metro/icons/dist/esm/react/*"]
  }
}
```

## 组件声明

```ts
interface IconProps {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}
```
