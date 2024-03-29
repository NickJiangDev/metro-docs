import { TimePicker } from '@metro/components';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React from 'react';

dayjs.extend(customParseFormat);

const App: React.FC = () => (
  <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} disabled />
);

export default App;
