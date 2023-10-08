import { CheckList } from '@metro/components';
import React from 'react';

const options = [
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

const App: React.FC = () => (
  <CheckList
    options={options}
    placeholder="Please input."
    borderless
    hideSearch
  />
);

export default App;
