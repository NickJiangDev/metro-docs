import { Slider } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Slider defaultValue={30} tooltip={{ open: true }} />
);

export default App;
