import { Toggle } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <Toggle loading defaultChecked />
    <br />
    <Toggle loading size="small" />
    <br />
    <Toggle loading />
    <br />
    <Toggle loading size="large" />
  </>
);

export default App;
