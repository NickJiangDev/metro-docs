import { Button, Space, Up } from '@metro/components';
import UploadIcon from '@metro/icons/dist/esm/react/Upload';
import React from 'react';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size="large">
    <Up
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
    >
      <Button icon={<UploadIcon />}>Upload (Max: 1)</Button>
    </Up>
    <Up
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={3}
      multiple
    >
      <Button icon={<UploadIcon />}>Upload (Max: 3)</Button>
    </Up>
  </Space>
);

export default App;
