import { Space, Toggle } from '@metro/components';
import React from 'react';

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const App: React.FC = () => (
  <Space direction="vertical">
    <Toggle
      defaultChecked
      onChange={onChange}
      showText
      checkedText="开启"
      unCheckedText="关闭"
    />
    <Toggle
      defaultChecked
      textHighlight
      onChange={onChange}
      showText
      checkedText="开启"
      unCheckedText="关闭"
    />
  </Space>
);

export default App;
