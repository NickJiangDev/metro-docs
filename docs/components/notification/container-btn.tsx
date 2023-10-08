import { Button, NotificationContainer, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <NotificationContainer
      type="info"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
      btn={
        <Space>
          <Button>Cancel</Button>
          <Button type="primary">Confirm</Button>
        </Space>
      }
    />
    <NotificationContainer
      type="warning"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
      btn={
        <Space>
          <Button>Cancel</Button>
          <Button type="primary">Confirm</Button>
        </Space>
      }
    />
    <NotificationContainer
      type="error"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
      btn={
        <Space>
          <Button>Cancel</Button>
          <Button danger>Confirm</Button>
        </Space>
      }
    />
    <NotificationContainer
      type="success"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
      btn={
        <Space>
          <Button>Cancel</Button>
          <Button success>Confirm</Button>
        </Space>
      }
    />
  </Space>
);

export default App;
