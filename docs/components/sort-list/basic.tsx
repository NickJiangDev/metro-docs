import { SortList } from '@metro/components';
import React from 'react';

const list = [
  {
    label: 'Label 1',
    value: 'val1',
  },
  {
    label: 'Label 2',
    value: 'val2',
  },
  {
    label: 'Label 3',
    value: 'val3',
  },
];

const App: React.FC = () => {
  return <SortList defaultList={list} />;
};

export default App;
