import { Scrollbar } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Scrollbar style={{ maxWidth: 300 }}>
    <div style={{ padding: 20, width: 1000 }}>
      {'Scroll Horizontal Content ->'}
    </div>
  </Scrollbar>
);

export default App;
