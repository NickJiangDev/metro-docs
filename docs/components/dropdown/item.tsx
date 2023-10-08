import type { MenuProps } from '@metro/components';
import { Button, Dropdown } from '@metro/components';
import { ChevronDown } from '@metro/icons/dist/esm/react';
import React from 'react';

const items: MenuProps['items'] = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://portal.idatatlas.com"
      >
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://portal.idatatlas.com"
      >
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item（disabled）',
    key: '3',
    disabled: true,
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
