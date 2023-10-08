import { FloatButton } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <div style={{ height: 360, background: 'var(--metro-bg-0)' }} />
    <FloatButton onClick={() => console.log('click')} />
  </>
);

export default App;
