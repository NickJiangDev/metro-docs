import { Select, Space } from '@metro/components';
import React from 'react';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Select defaultValue="lucy" options={[{ value: 'lucy', label: 'Lucy' }]} />
    <Select
      defaultValue="lucy"
      width={150}
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      block
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
  </Space>
);

export default App;
