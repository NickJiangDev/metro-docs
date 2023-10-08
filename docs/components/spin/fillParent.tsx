import { Spin } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <div
      style={{
        marginBottom: '20px',
        background: 'var(--metro-bg-1)',
        borderRadius: 4,
        height: 300,
      }}
    >
      <Spin fillParent />
    </div>
  </>
);

export default App;
