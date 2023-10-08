import type { MenuProps } from '@metro/components';
import { Menu } from '@metro/components';
import { Delete, GeoGlobal, Num, Pointer } from '@metro/icons/dist/esm/react';
import React, { useState } from 'react';

const items: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <Num />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <GeoGlobal />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <Pointer />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
      { type: 'divider' },
      {
        type: 'group',
        label: '删除',
        children: [
          {
            label: '删除',
            key: 'delete',
            icon: <Delete />,
            danger: true,
          },
        ],
      },
    ],
  },
  {
    label: (
      <a
        href="https://portal.idatatlas.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default App;
