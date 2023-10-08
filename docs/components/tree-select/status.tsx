import React from 'react';
import { Space, TreeSelect } from '@metro/components';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <TreeSelect status="error" placeholder="Error" />
    <TreeSelect
      status="warning"
      multiple
      placeholder="Warning multiple"
    />
  </Space>
);

export default App;