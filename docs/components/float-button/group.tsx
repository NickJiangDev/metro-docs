import { FloatButton } from '@metro/components';
import HelpCircleOutlined from '@metro/icons/dist/esm/react/HelpCircleOutlined';
import Refresh from '@metro/icons/dist/esm/react/Refresh';
import React from 'react';

const App: React.FC = () => (
  <>
    <div style={{ height: 360, background: 'var(--metro-bg-0)' }} />
    <FloatButton.Group shape="circle" style={{ right: 24 }}>
      <FloatButton icon={<HelpCircleOutlined />} />
      <FloatButton />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
    <FloatButton.Group shape="square" style={{ right: 94 }}>
      <FloatButton icon={<HelpCircleOutlined />} />
      <FloatButton />
      <FloatButton icon={<Refresh />} />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);

export default App;
