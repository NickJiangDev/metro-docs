import { Select, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Select status="error" block />
    <Select status="warning" block />
  </Space>
);

export default App;
