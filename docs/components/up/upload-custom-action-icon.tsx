import type { UpProps } from '@metro/components';
import { Button, Up } from '@metro/components';
import Download from '@metro/icons/dist/esm/react/Download';
import StarOff from '@metro/icons/dist/esm/react/StarOff';
import UploadIcon from '@metro/icons/dist/esm/react/Upload';
import React from 'react';

const props: UpProps = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png',
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
  showUploadList: {
    showDownloadIcon: true,
    downloadIcon: <Download />,
    showRemoveIcon: true,
    removeIcon: (
      <StarOff onClick={(e) => console.log(e, 'custom removeIcon event')} />
    ),
  },
};

const App: React.FC = () => (
  <Up {...props}>
    <Button icon={<UploadIcon />}>Upload</Button>
  </Up>
);

export default App;
