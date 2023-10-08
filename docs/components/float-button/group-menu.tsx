import { FloatButton } from '@metro/components';
import Mobile from '@metro/icons/dist/esm/react/Mobile';
import Notification from '@metro/icons/dist/esm/react/Notification';
import React from 'react';

const App: React.FC = () => (
  <>
    <div style={{ height: 360, background: 'var(--metro-bg-0)' }} />
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ right: 24 }}
      icon={<Notification />}
    >
      <FloatButton />
      <FloatButton icon={<Mobile />} />
    </FloatButton.Group>
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{ right: 94 }}
      icon={<Notification />}
    >
      <FloatButton />
      <FloatButton icon={<Mobile />} />
    </FloatButton.Group>
  </>
);

export default App;
