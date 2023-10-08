import { FloatButton, Toggle } from '@metro/components';
import Mobile from '@metro/icons/dist/esm/react/Mobile';
import Notification from '@metro/icons/dist/esm/react/Notification';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [open, setOpen] = useState(true);

  const onChange = (checked: boolean) => {
    setOpen(checked);
  };

  return (
    <>
      <div style={{ height: 360, background: 'var(--metro-bg-0)' }}>
        <Toggle onChange={onChange} checked={open} style={{ margin: 16 }} />
      </div>
      <FloatButton.Group
        open={open}
        trigger="click"
        style={{ right: 24 }}
        icon={<Notification />}
      >
        <FloatButton />
        <FloatButton icon={<Mobile />} />
      </FloatButton.Group>
    </>
  );
};

export default App;
