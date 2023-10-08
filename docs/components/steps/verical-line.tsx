import { Steps } from '@metro/components';
import React from 'react';

const description = 'This is a description.';
const App: React.FC = () => (
  <Steps
    type="line"
    direction="vertical"
    current={1}
    items={[
      {
        title: 'First Step',
        description,
      },
      {
        title: 'Second Step',
        description,
      },
      {
        title: 'Third Step',
        description,
      },
      {
        title: 'Fourth Step',
        description,
      },
    ]}
  />
);

export default App;
