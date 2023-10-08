import { Input } from '@metro/components';
import React from 'react';

const { TextArea } = Input;

const App: React.FC = () => (
  <>
    <TextArea rows={4} />
    <br />
    <br />
    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} showCount />
  </>
);

export default App;
