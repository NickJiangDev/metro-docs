import { Button, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical">
    <Space size="small">
      Space
      <Button>Button</Button>
      <Button type="primary">Button</Button>
    </Space>
    <Space>
      Space
      <Button>Button</Button>
      <Button type="primary">Button</Button>
    </Space>
    <Space size="large">
      Space
      <Button>Button</Button>
      <Button type="primary">Button</Button>
    </Space>
  </Space>
);

export default App;
