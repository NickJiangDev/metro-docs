import { Slider } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
);

export default App;
