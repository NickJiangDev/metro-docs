import type { MenuProps } from '@metro/components';
import { Dropdown } from '@metro/components';
import React from 'react';

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const App: React.FC = () => {
  return (
    <Dropdown menu={{ items }} trigger={['contextMenu']}>
      <div
        style={{
          background: `var(--metro-secondary-1)`,
          height: 200,
          textAlign: 'center',
          lineHeight: '200px',
        }}
      >
        Right Click on here
      </div>
    </Dropdown>
  );
};

export default App;
