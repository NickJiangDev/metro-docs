import { Button, toast } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  const [toastApi, contextHolder] = toast.useToast();

  const success = () => {
    toastApi.open({
      type: 'success',
      message: 'It will disappear in 10 seconds',
      duration: 10,
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized display duration</Button>
    </>
  );
};

export default App;
