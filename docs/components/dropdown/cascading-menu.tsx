import type { MenuProps } from '@metro/components';
import { Button, Dropdown } from '@metro/components';
import { ChevronDown } from '@metro/icons/dist/esm/react';
import React from 'react';

const items: MenuProps['items'] = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',

        children: [
          {
            key: '2-1-1',
            label: '5th menu item',
          },
        ],
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    disabled: true,
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
];

const App: React.FC = () => (
  <Dropdown menu={{ items }}>
    <Button
      onClick={(e) => e.preventDefault()}
      icon={<ChevronDown />}
      iconDirection="right"
    >
      Hover me
    </Button>
  </Dropdown>
);

export default App;
