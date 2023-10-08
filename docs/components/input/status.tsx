import { Input, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input status="success" placeholder="Success" />
  </Space>
);

export default App;
