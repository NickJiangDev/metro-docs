import { Button, Space, toastApi } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space>
    <Button
      type="primary"
      onClick={() =>
        toastApi.info({
          message: "Here's a massage of the task.",
          withClose: true,
        })
      }
    >
      info
    </Button>
    <Button
      success
      onClick={() =>
        toastApi.success({
          duration: 1,
          message: "Here's a massage of the task.",
          withClose: true,
        })
      }
    >
      success
    </Button>
    <Button
      danger
      onClick={() =>
        toastApi.error({
          message: "Here's a massage of the task.",
          withClose: true,
        })
      }
    >
      error
    </Button>
    <Button
      onClick={() =>
        toastApi.warning({
          message: "Here's a massage of the task.",
          withClose: true,
        })
      }
    >
      warning
    </Button>
    <Button
      onClick={() =>
        toastApi.loading({
          message: "Here's a massage of the task.",
          withClose: true,
        })
      }
    >
      loading
    </Button>
  </Space>
);

export default App;
