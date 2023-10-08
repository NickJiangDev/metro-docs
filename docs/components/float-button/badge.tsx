import { FloatButton } from '@metro/components';
import HelpCircleOutlined from '@metro/icons/dist/esm/react/HelpCircleOutlined';
import React from 'react';

const App: React.FC = () => (
  <>
    <div style={{ height: 360, background: 'var(--metro-bg-0)' }} />
    <FloatButton
      shape="circle"
      badge={{ dot: true }}
      style={{ right: 24 + 70 + 70 }}
    />
    <FloatButton.Group shape="circle" style={{ right: 24 + 70 }}>
      <FloatButton
        tooltip={<div>custom badge color</div>}
        badge={{ count: 5, color: 'cyan' }}
      />
      <FloatButton badge={{ count: 5 }} />
    </FloatButton.Group>
    <FloatButton.Group shape="circle">
      <FloatButton badge={{ count: 12 }} icon={<HelpCircleOutlined />} />
      <FloatButton badge={{ count: 123, overflowCount: 999 }} />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);

export default App;
