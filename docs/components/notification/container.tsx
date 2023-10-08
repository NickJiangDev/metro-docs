import { NotificationContainer, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <NotificationContainer
      type="info"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
    />
    <NotificationContainer
      type="warning"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
    />
    <NotificationContainer
      type="error"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
    />
    <NotificationContainer
      type="success"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
    />
  </Space>
);

export default App;
