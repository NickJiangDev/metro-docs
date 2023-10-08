import { Space, Spin } from '@metro/components';
import React from 'react';

const commonStyle = {
  padding: '50px',
  background: 'var(--metro-bg-1)',
  borderRadius: 4,
};
const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Space>
      <Spin tip="Loading..." size="small">
        <div style={commonStyle} />
      </Spin>
      <Spin tip="Loading...">
        <div style={commonStyle} />
      </Spin>
      <Spin tip="Loading..." size="large">
        <div style={commonStyle} />
      </Spin>
    </Space>
    <Space>
      <Spin tip="Loading..." size="small" brand>
        <div style={commonStyle} />
      </Spin>
      <Spin tip="Loading..." brand>
        <div style={commonStyle} />
      </Spin>
      <Spin tip="Loading..." size="large" brand>
        <div style={commonStyle} />
      </Spin>
    </Space>
  </Space>
);

export default App;
