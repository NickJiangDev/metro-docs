import { Button, Space, toastApi } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space>
    <Button
      type="primary"
      onClick={() => toastApi.info("Here's a massage of the task.", 1)}
    >
      info 1s duration
    </Button>
    <Button
      success
      onClick={() => toastApi.success("Here's a massage of the task.")}
    >
      success
    </Button>
    <Button
      danger
      onClick={() => toastApi.error("Here's a massage of the task.")}
    >
      error
    </Button>
    <Button onClick={() => toastApi.warning("Here's a massage of the task.")}>
      warning
    </Button>
    <Button onClick={() => toastApi.loading("Here's a massage of the task.")}>
      loading
    </Button>
  </Space>
);

export default App;
