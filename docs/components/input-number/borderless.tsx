import { InputNumber } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <InputNumber min={1} max={10} defaultValue={3} bordered={false} />
);

export default App;
