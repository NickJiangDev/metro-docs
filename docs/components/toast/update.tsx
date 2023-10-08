import { Button, toast } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  const [toastApi, contextHolder] = toast.useToast();
  const key = 'updatable';

  const openMessage = () => {
    toastApi.open({
      key,
      type: 'loading',
      message: 'Loading...',
    });
    setTimeout(() => {
      toastApi.open({
        key,
        type: 'success',
        message: 'Loaded!',
        duration: 2,
      });
    }, 1000);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openMessage}>
        Open the message box
      </Button>
    </>
  );
};

export default App;
