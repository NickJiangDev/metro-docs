import { Input } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <Input size="large" placeholder="large size" />
    <br />
    <br />
    <Input placeholder="default size" />
    <br />
    <br />
    <Input size="small" placeholder="small size" />
  </>
);

export default App;
