import { Button, toast } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  const [toastApi, contextHolder] = toast.useToast();

  const success = () => {
    toastApi.open({
      type: 'success',
      message: 'This is a prompt message with custom className and style',
      style: {
        marginTop: '20vh',
      },
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized style</Button>
    </>
  );
};

export default App;
