import { InputTags } from '@metro/components';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<string[]>(['HanMei']);
  const onChange = (value: string[]) => {
    setValue(value);
  };
  return (
    <>
      <InputTags value={value} onChange={onChange} />
      <br />
      <br />
      Result:{' '}
      {value.map((v) => (
        <label style={{ marginRight: 8 }}>{v}</label>
      ))}
    </>
  );
};

export default App;
