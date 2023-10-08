import { Mentions, Space } from '@metro/components';
import React from 'react';

const commonProps = {
  options: [
    {
      value: 'user',
      label: 'user',
    },
    {
      value: 'admin',
      label: 'admin',
    },
    {
      value: 'superAdmin',
      label: 'superAdmin',
    },
  ],
  defaultValue: '@user',
};
const App: React.FC = () => (
  <Space direction="vertical">
    <Mentions {...commonProps} bordered={false} />
  </Space>
);

export default App;
