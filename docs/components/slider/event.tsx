import { Slider } from '@metro/components';
import React from 'react';

const onChange = (value: number | number[]) => {
  console.log('onChange: ', value);
};

const onAfterChange = (value: number | number[]) => {
  console.log('onAfterChange: ', value);
};

const App: React.FC = () => (
  <>
    <Slider
      defaultValue={30}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
    <Slider
      range
      step={10}
      defaultValue={[20, 50]}
      onChange={onChange}
      onAfterChange={onAfterChange}
    />
  </>
);

export default App;
