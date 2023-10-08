import { CheckList } from '@metro/components';
import React from 'react';

const options = Array.from({ length: 10000 }, (v, k) => ({
  label: `Label ${k}`,
  value: `Val${k}`,
}));

const App: React.FC = () => (
  <CheckList options={options} placeholder="Please input." />
);

export default App;
