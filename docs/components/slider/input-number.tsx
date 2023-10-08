import { InputNumber, Slider, Space } from '@metro/components';
import React, { useState } from 'react';

const IntegerStep: React.FC = () => {
  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue: number | null) => {
    setInputValue(newValue || 0);
  };

  return (
    <div style={{ display: 'inline-flex', width: '100%' }}>
      <Slider
        min={1}
        max={20}
        onChange={onChange}
        value={typeof inputValue === 'number' ? inputValue : 0}
        style={{ width: '50%' }}
      />
      <InputNumber
        min={1}
        max={20}
        style={{ margin: '0 16px' }}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};

const DecimalStep: React.FC = () => {
  const [inputValue, setInputValue] = useState(0);

  const onChange = (value: number | null) => {
    if (!value || isNaN(value)) {
      return;
    }
    setInputValue(value);
  };

  return (
    <div style={{ display: 'inline-flex', width: '100%' }}>
      <Slider
        min={0}
        max={1}
        onChange={onChange}
        value={typeof inputValue === 'number' ? inputValue : 0}
        step={0.01}
        style={{ width: '50%' }}
      />
      <InputNumber
        min={0}
        max={1}
        style={{ margin: '0 16px' }}
        step={0.01}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};

const App: React.FC = () => (
  <Space style={{ width: '100%' }} direction="vertical">
    <IntegerStep />
    <DecimalStep />
  </Space>
);

export default App;
