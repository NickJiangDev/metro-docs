import type { RadioChangeEvent } from '@metro/components';
import { Radio } from '@metro/components';
import React, { useState } from 'react';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const App: React.FC = () => {
  const [value, setvalue] = useState('Apple');

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio3 checked', value);
    setvalue(value);
  };

  return (
    <>
      <Radio.Group
        options={options}
        onChange={onChange}
        value={value}
        optionType="button"
        size="large"
      />
      <br />
      <br />
      <Radio.Group
        options={options}
        onChange={onChange}
        value={value}
        optionType="button"
      />
      <br />
      <br />
      <Radio.Group
        options={options}
        onChange={onChange}
        value={value}
        optionType="button"
        size="small"
      />
    </>
  );
};

export default App;
