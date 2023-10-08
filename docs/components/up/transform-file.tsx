import type { UpProps } from '@metro/components';
import { Button, Up } from '@metro/components';
import UploadIcon from '@metro/icons/dist/esm/react/Upload';
import React from 'react';

const props: UpProps = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  beforeUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d')!;
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.font = '33px Arial';
          ctx.fillText('Metro Design', 20, 20);
          canvas.toBlob((result) => resolve(result as any));
        };
      };
    });
  },
};

const App: React.FC = () => (
  <Up {...props}>
    <Button icon={<UploadIcon />}>Upload</Button>
  </Up>
);

export default App;
