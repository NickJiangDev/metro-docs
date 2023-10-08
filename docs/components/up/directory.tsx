import { Button, Up } from '@metro/components';
import UploadIcon from '@metro/icons/dist/esm/react/Upload';
import React from 'react';

const App: React.FC = () => (
  <Up action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
    <Button icon={<UploadIcon />}>Upload Directory</Button>
  </Up>
);

export default App;
