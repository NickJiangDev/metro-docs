import { Button, NotificationContainer, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Space wrap>
    <NotificationContainer
      type="info"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
      btnDirection="right"
      closable={false}
      btn={
        <Space direction="vertical" size={4}>
          <Button.Link primary>更新</Button.Link>
          <Button.Link>忽略</Button.Link>
        </Space>
      }
    />
    <NotificationContainer
      type="warning"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
      btnDirection="right"
      closable={false}
      btn={
        <Space direction="vertical" size={4}>
          <Button.Link primary>更新</Button.Link>
          <Button.Link>忽略</Button.Link>
        </Space>
      }
    />
    <NotificationContainer
      type="error"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
      btnDirection="right"
      closable={false}
      btn={
        <Space direction="vertical" size={4}>
          <Button.Link danger>更新</Button.Link>
          <Button.Link>忽略</Button.Link>
        </Space>
      }
    />
    <NotificationContainer
      type="success"
      message="“Here's a massage of the task."
      description="This is the content of the notification. This is the content of the notification. This is the content of the notification."
      btnDirection="right"
      closable={false}
      btn={
        <Space direction="vertical" size={4}>
          <Button.Link primary>更新</Button.Link>
          <Button.Link>忽略</Button.Link>
        </Space>
      }
    />
  </Space>
);

export default App;
