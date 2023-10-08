import { Divider, Space, Tag } from '@metro/components';
import Cached from '@metro/icons/dist/esm/react/Cached';
import Clear from '@metro/icons/dist/esm/react/Clear';
import HelpOutlined from '@metro/icons/dist/esm/react/HelpOutlined';
import SuccessOutlined from '@metro/icons/dist/esm/react/SuccessOutlined';
import React from 'react';

const App: React.FC = () => (
  <>
    <Divider>Solid</Divider>
    <Space size={[0, 8]} wrap>
      <Tag color="success">
        <SuccessOutlined />
        success
      </Tag>
      <Tag color="processing">
        <Cached />
        processing
      </Tag>
      <Tag color="error">
        <Clear />
        error
      </Tag>
      <Tag color="warning">
        <HelpOutlined />
        warning
      </Tag>
    </Space>
    <Divider>Light</Divider>
    <Tag color="success" type="light">
      <SuccessOutlined />
      success
    </Tag>
    <Tag color="processing" type="light">
      <Cached />
      processing
    </Tag>
    <Tag color="error" type="light">
      <Clear />
      error
    </Tag>
    <Tag color="warning" type="light">
      <HelpOutlined />
      warning
    </Tag>
  </>
);

export default App;
