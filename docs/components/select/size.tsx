import { Select, Space } from '@metro/components';
import React from 'react';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => {
  const commonProps = {
    defaultValue: 'lucy',
    width: 120,
    onChange: handleChange,
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled', disabled: true },
    ],
  };
  return (
    <Space wrap id="select-size">
      <Select {...commonProps} size="large" />
      <Select {...commonProps} />
      <Select {...commonProps} size="small" />
    </Space>
  );
};

export default App;
