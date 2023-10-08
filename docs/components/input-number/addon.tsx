import { InputNumber, Space } from '@metro/components';
import { Setting } from '@metro/icons/dist/esm/react';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical">
    <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
    <InputNumber addonAfter={<Setting />} defaultValue={100} />
  </Space>
);

export default App;
