import { Steps } from '@metro/components';
import React from 'react';

const description = 'This is a description';
const App: React.FC = () => (
  <Steps
    current={1}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Process',
        description,
        status: 'error',
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);

export default App;
