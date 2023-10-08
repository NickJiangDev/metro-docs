import { Divider, Space, Tag } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical">
    <Divider>default</Divider>
    <Space size={[0, 8]} wrap>
      <Tag type="solid">default-solid</Tag>
      <Tag type="light">default-light</Tag>
    </Space>
    <Divider>primary</Divider>
    <Space size={[0, 8]} wrap>
      <Tag type="solid" color="primary">
        primary-solid
      </Tag>
      <Tag type="light" color="primary">
        primary-light
      </Tag>
    </Space>
  </Space>
);

export default App;
