import { Slider } from '@metro/components';
import React from 'react';

const formatter = (value?: number) => `${value}%`;

const App: React.FC = () => (
  <>
    <Slider tooltip={{ formatter }} />
    <Slider tooltip={{ formatter: null }} />
  </>
);

export default App;
