import { Mentions } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Mentions
    style={{ width: '100%' }}
    placement="top"
    options={[
      {
        value: 'user',
        label: 'user',
      },
      {
        value: 'admin',
        label: 'admin',
      },
      {
        value: 'superAdmin',
        label: 'superAdmin',
      },
    ]}
  />
);

export default App;
