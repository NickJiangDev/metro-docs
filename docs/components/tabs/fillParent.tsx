import type { TabsProps } from '@metro/components';
import { Space, Tabs } from '@metro/components';
import User from '@metro/icons/dist/esm/react/User';
import React from 'react';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: (
      <Space size="small">
        <User />
        Tab 1
      </Space>
    ),
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: (
      <Space size="small">
        <User />
        Tab 2
      </Space>
    ),
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: (
      <Space size="small">
        <User />
        Tab 3
      </Space>
    ),
    children: `Content of Tab Pane 3`,
  },
];

const App: React.FC = () => (
  <div style={{ height: 300 }}>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} fillParent />
  </div>
);

export default App;
