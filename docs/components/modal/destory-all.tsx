import HelpOutlined from '@metro/icons/dist/esm/react/HelpOutlined';
import React from 'react';

import { Button, Modal } from '@metro/components';

const { confirm } = Modal;

const destroyAll = () => {
  Modal.destroyAll();
};

const showConfirm = () => {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: <HelpOutlined />,
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }, i * 500);
  }
};

const App: React.FC = () => <Button onClick={showConfirm}>Confirm</Button>;

export default App;
