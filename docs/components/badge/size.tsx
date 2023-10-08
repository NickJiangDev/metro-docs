import { Avatar, Badge, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space size="middle">
    <Badge size="default" count={5}>
      <Avatar />
    </Badge>
    <Badge size="small" count={5}>
      <Avatar />
    </Badge>
  </Space>
);

export default App;
