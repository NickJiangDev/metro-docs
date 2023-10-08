import { InputNumber, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <InputNumber min={1} max={10} keyboard={false} defaultValue={3} />
    </Space>
  );
};

export default App;
