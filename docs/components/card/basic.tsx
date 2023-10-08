import { Button, Card, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" size={16}>
    <Card
      title="Default size card"
      extra={<Button.Link primary>More</Button.Link>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card
      size="small"
      title="Small size card"
      extra={<Button.Link primary>More</Button.Link>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
);

export default App;
