import type { SelectProps } from '@metro/components';
import { Select } from '@metro/components';
import React from 'react';

const options: SelectProps['options'] = [];

for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    label: value,
    value,
    disabled: i === 10,
  });
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <Select
    mode="multiple"
    block
    placeholder="Please select"
    defaultValue={['a10', 'c12']}
    onChange={handleChange}
    options={options}
  />
);

export default App;
