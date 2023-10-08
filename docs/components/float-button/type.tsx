import { FloatButton } from '@metro/components';
import HelpCircleOutlined from '@metro/icons/dist/esm/react/HelpCircleOutlined';
import React from 'react';

const App: React.FC = () => (
  <>
    <div style={{ height: 360, background: 'var(--metro-bg-0)' }} />
    <FloatButton
      icon={<HelpCircleOutlined />}
      type="primary"
      style={{ right: 24 }}
    />
    <FloatButton
      icon={<HelpCircleOutlined />}
      type="default"
      style={{ right: 94 }}
    />
  </>
);

export default App;
