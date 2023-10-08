import { Affix, Button } from '@metro/components';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  return (
    <div style={{ height: 100, overflowY: 'scroll' }} ref={setContainer}>
      <div
        style={{
          paddingTop: 60,
          height: 300,
          backgroundColor: 'var(--metro-fill-1)',
        }}
      >
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};

export default App;
