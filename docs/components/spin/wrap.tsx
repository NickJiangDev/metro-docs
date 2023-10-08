import { Spin } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <Spin>
      <div
        style={{
          margin: '20px 0',
          marginBottom: '20px',
          padding: '30px 50px',
          textAlign: 'center',
          background: 'var(--metro-bg-1)',
          borderRadius: 4,
        }}
      ></div>
    </Spin>
    <Spin brand>
      <div
        style={{
          margin: '20px 0',
          marginBottom: '20px',
          padding: '30px 50px',
          textAlign: 'center',
          background: 'var(--metro-bg-1)',
          borderRadius: 4,
        }}
      ></div>
    </Spin>
  </>
);

export default App;
