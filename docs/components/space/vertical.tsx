import { Button, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ display: 'flex' }}>
    Space
    <Button>Button</Button>
    <Button type="primary">Button</Button>
  </Space>
);

export default App;
