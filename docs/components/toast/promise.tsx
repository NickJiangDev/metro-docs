import { Button, toast } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  const [toastApi, contextHolder] = toast.useToast();

  const success = () => {
    toastApi
      .open({
        type: 'loading',
        message: 'Action in progress..',
        duration: 2.5,
      })
      .then(() => toast.success({ message: 'Loading finished', duration: 2.5 }))
      .then(() => toast.info({ message: 'Loading finished', duration: 2.5 }));
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>Display sequential messages</Button>
    </>
  );
};

export default App;
