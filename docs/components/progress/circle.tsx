import { Progress, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="warning" />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </Space>
);

export default App;
