---
nav: '主题&色彩'
title: 主题介绍
toc: content
group:
  title: 主题
  order: 1
---

# 主题介绍

Metro design System 支持`全局`、`组件级别`的样式定制，并在 Figma 和线上代码之间保持同步。内嵌两套完整的主题：

- `Light`
- `Dark`

不同的主题由不同的 **[主题变量](/basic/semantic-token)** 构成，而主题变量由 **[基础色板](/basic/global-token)** 构成，组合成为 Metro design System 的主题色。

## 切换展示

<code src="./theme.tsx"></code>

## [使用主题 & 切换主题](/components/config-provider#docs-components-config-provider-demo-0)

1. 使用内置组件`ConfigProvider`全局赋予主题色

```js
import { ConfigProvider } from '@metro/components';
import React from 'react';

const Demo: React.FC = () => (
  <ConfigProvider theme="dark">
    <App />
  </ConfigProvider>
);

export default Demo;
```

2. 使用通用函数 `loadTheme` 指定目标节点赋予主题

## [主题色定制](/components/config-provider#docs-components-config-provider-demo-1)

1. 使用内置组件`ConfigProvider`修改主题色, 对应 [cssVar 变量](/basic/semantic-token#变量展示)

```js
import { ConfigProvider, Avatar } from '@metro/components';
import React from 'react';

const Demo: React.FC = () => {
  const cssVars = { '--metro-primary-default': '#000000' };
  return (
    <ConfigProvider cssVars={cssVars}>
      <Avatar />
    </ConfigProvider>
  );
};

export default Demo;
```

2. 使用通用函数 `loadTheme` 指定目标节点修改主题色
