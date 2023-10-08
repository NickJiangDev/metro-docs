import { InputNumber, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <InputNumber status="error" style={{ width: '100%' }} />
    <InputNumber status="warning" style={{ width: '100%' }} />
    <InputNumber status="success" style={{ width: '100%' }} />
  </Space>
);

export default App;
