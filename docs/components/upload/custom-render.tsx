import { Button, Upload } from '@metro/components';
import UploadIcon from '@metro/icons/dist/esm/react/Upload';
import React from 'react';

const App: React.FC = () => (
  <Upload>
    <Button onlyIcon icon={<UploadIcon />} />
  </Upload>
);

export default App;
