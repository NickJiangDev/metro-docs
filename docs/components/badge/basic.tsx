import { Avatar, Badge, Space } from '@metro/components';
import TimeClock from '@metro/icons/dist/esm/react/TimeClock';
import React from 'react';

const App: React.FC = () => (
  <Space size="middle">
    <Badge count={5}>
      <Avatar />
    </Badge>
    <Badge count={0} showZero>
      <Avatar />
    </Badge>
    <Badge
      count={<TimeClock style={{ color: 'var(--metro-danger-default)' }} />}
    >
      <Avatar />
    </Badge>
  </Space>
);

export default App;
