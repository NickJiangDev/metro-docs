import type { SelectProps } from '@metro/components';
import { Select } from '@metro/components';
import React from 'react';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <Select
    mode="tags"
    block
    onChange={handleChange}
    tokenSeparators={[',']}
    options={options}
  />
);

export default App;
