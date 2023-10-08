import { SortList } from '@metro/components';
import React from 'react';

const list: any = [];

for (let index = 0; index < 10000; index++) {
  list.push({
    label: `Label ${index}`,
    value: `val${index}`,
  });
}

const App: React.FC = () => {
  return <SortList defaultList={list} useVirtual />;
};

export default App;
