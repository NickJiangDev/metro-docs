import { InputNumber } from '@metro/components';
import React from 'react';

const onChange = (value: number | null) => {
  console.log('changed', value);
};

const App: React.FC = () => (
  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
);

export default App;
