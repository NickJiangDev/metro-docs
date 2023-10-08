import { InputTags } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  return <InputTags separators={['Enter', ';']} placeholder='Try ";"' />;
};

export default App;
