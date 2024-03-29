import { TimePicker } from '@metro/components';
import React from 'react';

const { RangePicker } = TimePicker;

const App: React.FC = () => (
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>
);

export default App;
