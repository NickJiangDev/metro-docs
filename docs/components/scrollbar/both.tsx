import { Scrollbar } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Scrollbar style={{ maxHeight: 300, maxWidth: 300 }}>
    <div style={{ width: 1000 }}>
      {[...Array(50)].map((x, i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  </Scrollbar>
);

export default App;
