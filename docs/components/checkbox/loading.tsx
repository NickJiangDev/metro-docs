import type { CheckboxChangeEvent } from '@metro/components';
import { Checkbox } from '@metro/components';
import React from 'react';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

// test function
function sleep(time: number) {
  return new Promise((resolve) => {
    let timer = setTimeout(() => {
      clearTimeout(timer);
      resolve(0);
    }, time);
  });
}

const App: React.FC = () => {
  const [value, setValue] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const onClick = async () => {
    setLoading(true);
    await sleep(2000);
    setLoading(false);
    setValue(!value);
  };
  return (
    <Checkbox
      onChange={onChange}
      loading={loading}
      onClick={onClick}
      checked={value}
    >
      Async Loading!
    </Checkbox>
  );
};

export default App;
