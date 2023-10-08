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

const App: React.FC = () => {
  const filterItem = (item: any, search: string) => {
    console.log(item, search);
    return item.value.includes(search);
  };
  return (
    <CheckList
      options={options}
      placeholder="Please input."
      filterItem={filterItem}
    />
  );
};

export default App;
