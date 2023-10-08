import type { UpFile, UpProps } from '@metro/components';
import { Button, Up } from '@metro/components';
import UploadIcon from '@metro/icons/dist/esm/react/Upload';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [fileList, setFileList] = useState<UpFile[]>([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    },
  ]);

  const handleChange: UpProps['onChange'] = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFileList);
  };

  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleChange,
    multiple: true,
  };
  return (
    <Up {...props} fileList={fileList}>
      <Button icon={<UploadIcon />}>Upload</Button>
    </Up>
  );
};

export default App;
