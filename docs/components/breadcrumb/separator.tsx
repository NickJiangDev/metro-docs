import { Breadcrumb } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Breadcrumb
    separator=">"
    items={[
      {
        title: 'I',
      },
      {
        title: 'Am',
        href: '',
      },
      {
        title: 'Fine',
        href: '',
      },
      {
        title: 'Thank you',
      },
    ]}
  />
);

export default App;
