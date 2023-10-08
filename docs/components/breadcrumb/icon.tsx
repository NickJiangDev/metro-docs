import { Breadcrumb } from '@metro/components';
import AppGrid from '@metro/icons/dist/esm/react/AppGrid';
import User from '@metro/icons/dist/esm/react/User';
import React from 'react';

const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: <AppGrid />,
      },
      {
        href: '',
        title: (
          <>
            <User />
            <span>User</span>
          </>
        ),
      },
      {
        title: 'List',
      },
    ]}
  />
);

export default App;
