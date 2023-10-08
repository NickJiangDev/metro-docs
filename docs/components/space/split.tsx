import { Button, Divider, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space split={<Divider type="vertical" />}>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </Space>
);

export default App;
