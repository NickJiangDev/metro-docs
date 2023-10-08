import { Button, Space } from '@metro/components';
import React from 'react';

const spaceAlignStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
};

const spaceAlignBlockStyle = {
  flex: 'none',
  margin: '8px 4px',
  padding: '4px',
  border: '1px solid #40a9ff',
};

const blockStyle = {
  display: 'inline-block',
  padding: '32px 8px 16px',
  background: 'rgba(150, 150, 150, 0.2)',
};
const App: React.FC = () => (
  //@ts-ignore
  <div style={spaceAlignStyle}>
    <div style={spaceAlignBlockStyle}>
      <Space align="center">
        center
        <Button type="primary">Primary</Button>
        <span style={blockStyle}>Block</span>
      </Space>
    </div>
    <div style={spaceAlignBlockStyle}>
      <Space align="start">
        start
        <Button type="primary">Primary</Button>
        <span style={blockStyle}>Block</span>
      </Space>
    </div>
    <div style={spaceAlignBlockStyle}>
      <Space align="end">
        end
        <Button type="primary">Primary</Button>
        <span style={blockStyle}>Block</span>
      </Space>
    </div>
    <div style={spaceAlignBlockStyle}>
      <Space align="baseline">
        baseline
        <Button type="primary">Primary</Button>
        <span style={blockStyle}>Block</span>
      </Space>
    </div>
  </div>
);

export default App;
