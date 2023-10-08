import type { RadioChangeEvent } from '@metro/components';
import { Radio } from '@metro/components';
import React, { useState } from 'react';

const plainOptions = ['Apple', 'Pear', 'Orange'];

const App: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio checked', value);
    setValue(value);
  };

  return (
    <Radio.Group
      options={plainOptions}
      onChange={onChange}
      value={value}
      direction="vertical"
    />
  );
};

export default App;
