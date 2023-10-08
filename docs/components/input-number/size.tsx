import { InputNumber, Space } from '@metro/components';
import React from 'react';

const onChange = (value: number | null) => {
  console.log('changed', value);
};

const App: React.FC = () => (
  <Space>
    <InputNumber
      size="large"
      min={1}
      max={100000}
      defaultValue={3}
      onChange={onChange}
    />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber
      size="small"
      min={1}
      max={100000}
      defaultValue={3}
      onChange={onChange}
    />
  </Space>
);

export default App;
