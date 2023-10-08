import type { UpProps } from '@metro/components';
import { Button, toast, Up } from '@metro/components';
import UploadIcon from '@metro/icons/dist/esm/react/Upload';
import React from 'react';

const props: UpProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      toast.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      toast.error(`${info.file.name} file upload failed.`);
    }
  },
};

const App: React.FC = () => (
  <Up {...props}>
    <Button icon={<UploadIcon />}>Click to Upload</Button>
  </Up>
);

export default App;
