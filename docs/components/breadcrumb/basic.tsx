import { Breadcrumb } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Page</a>,
      },
      {
        title: <a href="">Sub Page</a>,
      },
      {
        title: 'Current',
      },
    ]}
  />
);

export default App;
