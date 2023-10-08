import { Space, Toggle } from '@metro/components';
import React from 'react';

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const App: React.FC = () => (
  <Space direction="vertical">
    <Toggle defaultChecked onChange={onChange} showChildren={false} />
    <Toggle defaultChecked onChange={onChange} />
    <Toggle defaultChecked onChange={onChange} suffix="我是一个开关：" />
  </Space>
);

export default App;
