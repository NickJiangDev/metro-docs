import { FloatButton } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <div
    style={{
      height: '500vh',
      padding: 10,
      background: 'var(--metro-bg-0)',
      color: 'var(--metro-text-1)',
    }}
  >
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <FloatButton.BackTop />
  </div>
);

export default App;
