import { FloatButton } from '@metro/components';
import Notification from '@metro/icons/dist/esm/react/Notification';
import React from 'react';

const App: React.FC = () => (
  <>
    <div style={{ height: 360, background: 'var(--metro-bg-0)' }} />
    <FloatButton
      shape="circle"
      type="primary"
      style={{ right: 94 }}
      icon={<Notification />}
    />
    <FloatButton
      shape="square"
      type="primary"
      style={{ right: 24 }}
      icon={<Notification />}
    />
  </>
);

export default App;
