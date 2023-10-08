import { Button, Card } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Card title="Card title">
    <Card
      type="inner"
      title="Inner Card title"
      extra={<Button.Link primary>More</Button.Link>}
    >
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Inner Card title"
      extra={<Button.Link primary>More</Button.Link>}
    >
      Inner Card content
    </Card>
  </Card>
);

export default App;
