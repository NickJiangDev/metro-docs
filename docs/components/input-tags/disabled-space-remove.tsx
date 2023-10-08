import { InputTags } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  return (
    <InputTags
      disableBackspaceRemove
      placeholder='Forbidden "space" to remove'
    />
  );
};

export default App;
