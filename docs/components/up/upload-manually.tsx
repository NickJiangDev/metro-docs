import type { RcFile, UpFile, UpProps } from '@metro/components';
import { Button, toast, Up } from '@metro/components';
import UploadIcon from '@metro/icons/dist/esm/react/Upload';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [fileList, setFileList] = useState<UpFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file as RcFile);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        toast.success('upload successfully.');
      })
      .catch(() => {
        toast.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props: UpProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <>
      <Up {...props}>
        <Button icon={<UploadIcon />}>Select File</Button>
      </Up>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </>
  );
};

export default App;
