import { VirtuallizedList, VitrualizedListHandle } from '@metro/components';
import React from 'react';

const App = () => {
  const ref = React.useRef<VitrualizedListHandle>(null);
  React.useEffect(() => {
    ref.current?.scrollToIndex(999);
  }, []);
  return (
    <VirtuallizedList mode="reverse" ref={ref}>
      {Array.from({ length: 1000 }).map((_, i) => (
        <div key={i} style={{ height: 36 }}>
          {i}
        </div>
      ))}
    </VirtuallizedList>
  );
};

export default App;
