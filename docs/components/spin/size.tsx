import { Space, Spin } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical">
    <Space>
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </Space>
    <Space>
      <Spin size="small" brand />
      <Spin brand />
      <Spin size="large" brand />
    </Space>
  </Space>
);

export default App;
