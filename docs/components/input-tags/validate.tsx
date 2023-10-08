import { InputTags } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  const beforeAddValidate = (tag: string) => {
    if (tag === 'test') {
      return false;
    }
    return true;
  };
  return (
    <InputTags
      beforeAddValidate={beforeAddValidate}
      placeholder='Forbidden to add "test" tag'
    />
  );
};

export default App;
