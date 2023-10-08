---
toc: content
title: ConfigProvider（全局化配置）
nav:
  title: 组件
group:
  title: 配置组件
  order: 6
---

# ConfigProvider(全局化配置)

为组件提供统一的全局化配置。

## 使用

ConfigProvider 使用 React 的 [context](https://reactjs.org/docs/context.html) 特性，只需在应用外围包裹一次即可全局生效。

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

## 代码演示

```jsx
/**
 * title: 主题配置
 */
import { ConfigProvider, Button, Divider } from '@metro/components';
import React from 'react';

const Demo: React.FC = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <>
      <Divider orientation="left">{`当前主题: ${theme}`}</Divider>
      <ConfigProvider theme={theme}>
        <div
          style={{
            border: '1px solid var(--metro-divider-1)',
            borderRadius: '6px',
            padding: '20px',
            background: 'var(--metro-bg-1)',
          }}
        >
          <p style={{ color: 'var(--metro-text-0)' }}>主题环境提供的包裹器</p>
          <Button
            onClick={() => {
              if (theme === 'dark') {
                setTheme('light');
              } else {
                setTheme('dark');
              }
            }}
          >
            点击切换
          </Button>
        </div>
      </ConfigProvider>
    </>
  );
};

export default Demo;
```

```jsx
/**
 * title: 主题变量配置
 * description: 通过配置`ConfigProvider`的`cssVars`修改主题变量
 */
import { Select, ConfigProvider } from '@metro/components';
import System from './System.tsx';
import React from 'react';

const App: React.FC = () => {
  const [value, setValue] = React.useState(undefined);
  return (
    <>
      <Select
        placeholder="修改品牌主色 --metro-primary-default"
        value={value}
        style={{ width: 300, marginBottom: 20 }}
        options={[
          { label: 'Red', value: 'red' },
          { label: 'Green', value: 'green' },
        ]}
        onChange={setValue}
      />
      <ConfigProvider
        cssVars={value ? { '--metro-primary-default': value } : {}}
      >
        <div>
          <System />
        </div>
      </ConfigProvider>
    </>
  );
};

export default App;
```

## API

| 参数              | 说明           | 类型                                                  | 默认值              | 版本 |
| ----------------- | -------------- | ----------------------------------------------------- | ------------------- | ---- |
| prefixCls         | 组件类名的前缀 | string                                                | 'metro'             |      |
| theme             | 设置主题       | `light`\|`dark`                                       | `light`             |      |
| locale            | 语言包配置     | [`Locale`](#locale)                                   | `zh_CN`             |      |
| cssVars           | 设置主题变量   | Object [参见主题变量](/basic/semantic-token#变量展示) |                     |      |
| getPopupContainer | 挂载节点       | `function(triggerNode)`                               | () => document.body |      |

### Locale

```js
export interface Locale {
  locale: string;
  Pagination?: PaginationLocale;
  DatePicker?: DatePickerLocale;
  TimePicker?: Record<string, any>;
  Calendar?: Record<string, any>;
  Modal?: ModalLocale;
  Table?: TableLocale;
  Up?: UpLocale;
  Popconfirm?: PopconfirmLocale;
  Form?: {
    optional?: string,
    defaultValidateMessages: ValidateMessages,
  };
}
```

### Q&A

为什么通过`ConfigProvider`包裹主题的组件，在`Modal` `Drawer`等游离组件上不生效？

游离元素默认挂载的节点是`document.body`，如果你是通过`ConfigProvider`提供的主题色，请使用`getPopupContainer`挂载到当前元素内：

```js
  <ConfigProvider
    theme={'dark'}
    getPopupContainer={() =>
      document.getElementById('metro-config-provider')!
    }
  >
    <div id="metro-config-provider">
      {/** Your Components **/}
    </div>
  </ConfigProvider>
```

或者直接使用`loadTheme`函数将主题挂载到 html 上
