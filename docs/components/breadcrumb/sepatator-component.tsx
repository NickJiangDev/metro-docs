import { Breadcrumb } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Breadcrumb
    separator=""
    items={[
      {
        title: 'Home',
      },
      {
        type: 'separator',
        separator: ':',
      },
      {
        href: '',
        title: 'A',
      },
      {
        type: 'separator',
      },
      {
        href: '',
        title: 'B',
      },
      {
        type: 'separator',
      },
      {
        title: 'C',
      },
    ]}
  />
);

export default App;
