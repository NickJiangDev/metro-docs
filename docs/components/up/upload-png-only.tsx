import type { UpProps } from '@metro/components';
import { Button, toast, Up } from '@metro/components';
import UploadIcon from '@metro/icons/dist/esm/react/Upload';
import React from 'react';

const props: UpProps = {
  beforeUpload: (file) => {
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
      toast.error(`${file.name} is not a png file`);
    }
    return isPNG || Up.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

const App: React.FC = () => (
  <Up {...props}>
    <Button icon={<UploadIcon />}>Upload png only</Button>
  </Up>
);

export default App;
