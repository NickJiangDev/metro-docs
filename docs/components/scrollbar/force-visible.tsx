import { Scrollbar } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Scrollbar style={{ maxHeight: 300 }} forceVisible="y" autoHide={false}>
    <div>
      {[...Array(50)].map((x, i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  </Scrollbar>
);

export default App;
