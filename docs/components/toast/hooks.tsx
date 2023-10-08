import { Button, toastApi } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  const [api, contextHolder] = toastApi.useToast();

  const info = () => {
    api.info({ message: "“Here's a massage of the task." });
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  );
};

export default App;
