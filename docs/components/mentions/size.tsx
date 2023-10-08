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
    <Mentions {...commonProps} size="small" />
    <Mentions {...commonProps} size="middle" />
    <Mentions {...commonProps} size="large" />
  </Space>
);

export default App;
