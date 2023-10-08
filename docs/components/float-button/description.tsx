import { FloatButton } from '@metro/components';
import FileCode from '@metro/icons/dist/esm/react/FileCode';
import React from 'react';

const App: React.FC = () => (
  <>
    <div style={{ height: 360, background: 'var(--metro-bg-0)' }} />
    <FloatButton
      icon={<FileCode />}
      description="HELP INFO"
      shape="square"
      style={{ right: 24 }}
    />
    <FloatButton description="HELP INFO" shape="square" style={{ right: 94 }} />
    <FloatButton
      icon={<FileCode />}
      description="HELP"
      shape="square"
      style={{ right: 164 }}
    />
  </>
);

export default App;
