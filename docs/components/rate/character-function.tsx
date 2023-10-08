import { Rate } from '@metro/components';
import Checked from '@metro/icons/dist/esm/react/Checked';
import Close from '@metro/icons/dist/esm/react/Close';
import React from 'react';

const customIcons: Record<number, React.ReactNode> = {
  1: <Close />,
  2: <Close />,
  3: <Close />,
  4: <Checked />,
  5: <Checked />,
};

const App: React.FC = () => (
  <>
    <Rate
      defaultValue={2}
      character={({ index }: { index?: number }) => (index || 0) + 1}
    />
    <br />
    <Rate
      defaultValue={3}
      character={({ index }: { index?: number }) =>
        customIcons[(index || 0) + 1]
      }
    />
  </>
);

export default App;
