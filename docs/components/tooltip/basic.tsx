import { Space, Tooltip } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space>
    <Tooltip title="prompt text">
      <span>悬浮展示</span>
    </Tooltip>
    <Tooltip title="prompt text" trigger="click">
      <span>点击展示</span>
    </Tooltip>
  </Space>
);

export default App;
