import { InputNumber, Space } from '@metro/components';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<string | number | null>('99');

  return (
    <Space direction="vertical">
      <InputNumber.Locked
        min={1}
        max={10}
        value={value}
        onChange={(val: typeof value) => {
          console.log('onchange=', val);
          setValue(val);
        }}
      />
    </Space>
  );
};

export default App;
