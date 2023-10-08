import { InputTags, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <InputTags status="error" placeholder="Error" />
    <InputTags status="warning" placeholder="Warning" />
    <InputTags status="success" placeholder="Success" />
  </Space>
);

export default App;
