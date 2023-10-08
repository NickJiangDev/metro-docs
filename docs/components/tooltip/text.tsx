import { Divider, Space, TooltipText } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <Space>
      <TooltipText text="我是Tooltip" />
      <div style={{ width: 200 }}>
        <TooltipText text="我是Tooltip我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长我很长" />
      </div>
    </Space>
    <Divider>宽度超过200， tooltip展示</Divider>
  </>
);

export default App;
