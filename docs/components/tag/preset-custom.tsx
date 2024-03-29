import { Divider, Space, Tag } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <Space size={[0, 8]} wrap>
      <Tag color="yellow">yellow</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="violet">violet</Tag>
      <Tag color="pink">pink</Tag>
    </Space>
    <Divider orientation="left">Custom</Divider>
    <Space size={[0, 8]} wrap>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </Space>
  </>
);

export default App;
