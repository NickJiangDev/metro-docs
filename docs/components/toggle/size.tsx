import { Toggle } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <Toggle size="small" defaultChecked />
    <br />
    <Toggle defaultChecked />
    <br />
    <Toggle size="large" defaultChecked />
  </>
);

export default App;
