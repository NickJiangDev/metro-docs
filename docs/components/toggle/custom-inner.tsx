import { Space, Toggle } from '@metro/components';
import { Card, User } from '@metro/icons/dist/esm/react';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical">
    <Toggle checkedChildren="开始" unCheckedChildren="关闭" defaultChecked />
    <Toggle
      checkedChildren={<User />}
      unCheckedChildren={<Card />}
      defaultChecked
    />
  </Space>
);

export default App;
