import { Grid, Tag } from '@metro/components';
import React from 'react';

const { useBreakpoint } = Grid;

const App: React.FC = () => {
  const screens = useBreakpoint();

  return (
    <>
      Current break point:{' '}
      {Object.entries(screens)
        .filter((screen) => !!screen[1])
        .map((screen) => (
          <Tag color="cyan" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))}
    </>
  );
};

export default App;
