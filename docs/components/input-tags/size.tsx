import { InputTags } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <InputTags size="large" placeholder="large size" />
    <br />
    <br />
    <InputTags placeholder="default size" />
    <br />
    <br />
    <InputTags size="small" placeholder="small size" />
  </>
);

export default App;
