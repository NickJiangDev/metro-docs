import { Transfer } from '@metro/components';
import React from 'react';

const list = [
  {
    title: 'Label 1',
    key: 'val1',
  },
  {
    title: 'Label 2',
    key: 'val2',
  },
  {
    title: 'Label 3',
    key: 'val3',
  },
];

const App: React.FC = () => {
  return <Transfer options={list} sortable />;
};

export default App;
