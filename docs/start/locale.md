---
toc: content
title: 国际化
nav:
  title: 快速开始
order: 3
---

# 国际化 <Badge type="success">0.3.0-alpha-20</Badge>

MDS 目前的默认文案是中文，如果需要使用其他语言，可以参考下面的方案。

## ConfigProvider

MDS 提供了一个 React 组件 [ConfigProvider](/components/config-provider) 用于全局配置国际化文案。

```js
import enUS from '@metro/components/dist/esm/locale/en_US';

return (
  <ConfigProvider locale={enUS}>
    <App />
  </ConfigProvider>
);
```

详细配置见：[ConfigProvider](/components/config-provider)。

注意：`zh_CN` 是文件名，以下表格也遵循同样的规则。

目前支持以下语言：

| 语言         | 文件名 |
| ------------ | ------ |
| 英语（美式） | en_US  |
| 简体中文     | zh_CN  |

具体的使用方法请参考 [ConfigProvider 文档](/components/config-provider)。
