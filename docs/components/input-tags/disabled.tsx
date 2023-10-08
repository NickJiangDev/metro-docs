import { InputTags } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <InputTags disabled />
      <br />
      <br />
      <InputTags disabled value={['test']} />
    </>
  );
};

export default App;
