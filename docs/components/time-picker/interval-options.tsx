import { TimePicker } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <TimePicker minuteStep={15} secondStep={10} hourStep={1} />
);

export default App;
