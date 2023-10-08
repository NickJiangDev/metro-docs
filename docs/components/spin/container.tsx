import { Spin } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <div
      style={{
        margin: '20px 0',
        marginBottom: '20px',
        padding: '30px 50px',
        textAlign: 'center',
        background: 'var(--metro-bg-1)',
        borderRadius: 4,
      }}
    >
      <Spin />
    </div>
    <div
      style={{
        margin: '20px 0',
        marginBottom: '20px',
        padding: '30px 50px',
        textAlign: 'center',
        background: 'var(--metro-bg-1)',
        borderRadius: 4,
      }}
    >
      <Spin brand />
    </div>
  </>
);

export default App;
