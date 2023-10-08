import { Button, ConfigProvider, Tooltip } from '@metro/components';
import { usePrefersColor } from 'dumi';
import React from 'react';

const App: React.FC = () => {
  const [color] = usePrefersColor();
  React.useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);

  return (
    <ConfigProvider theme={color}>
      <div
        style={{
          width: '300vw',
          height: '300vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--metro-bg-2)',
        }}
      >
        <Tooltip title="xxxxxxxxxxxx" open>
          <Button>Scroll The Window</Button>
        </Tooltip>
      </div>
    </ConfigProvider>
  );
};

export default App;
