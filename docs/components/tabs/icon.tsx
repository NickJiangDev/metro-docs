import { Space, Tabs } from '@metro/components';
import LockOff from '@metro/icons/dist/esm/react/LockOff';
import LockOn from '@metro/icons/dist/esm/react/LockOn';
import React from 'react';

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="2"
    items={[LockOff, LockOn].map((Icon, i) => {
      const id = String(i + 1);

      return {
        label: (
          <Space size="small">
            <Icon />
            Tab {id}
          </Space>
        ),
        key: id,
        children: `Tab ${id}`,
      };
    })}
  />
);

export default App;
