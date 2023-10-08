import { Input, Space } from '@metro/components';
import { Setting } from '@metro/icons/dist/esm/react';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical">
    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    <Input addonAfter={<Setting />} defaultValue="mysite" />
    <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
  </Space>
);

export default App;
