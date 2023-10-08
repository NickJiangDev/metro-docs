import type { MenuProps } from '@metro/components';
import { Button, Dropdown } from '@metro/components';
import { ChevronDown, User } from '@metro/icons/dist/esm/react';
import React from 'react';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: '1st menu item',
  },
  {
    key: '2',
    label: '2nd menu item',
    icon: <User />,
    disabled: true,
  },
  {
    key: '3',
    danger: true,
    label: 'a danger item',
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
