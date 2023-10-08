import { Button, notification, Space } from '@metro/components';
import React from 'react';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification({
    closable: false,
  });

  const openNotificationWithIcon = (type: NotificationType) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space direction="vertical" size={4}>
        <Button.Link primary onClick={() => api.destroy(key)}>
          更新
        </Button.Link>
        <Button.Link onClick={() => api.destroy()}>忽略</Button.Link>
      </Space>
    );
    const errorBtn = (
      <Space direction="vertical" size={4}>
        <Button.Link danger onClick={() => api.destroy(key)}>
          更新
        </Button.Link>
        <Button.Link onClick={() => api.destroy()}>忽略</Button.Link>
      </Space>
    );
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification.This is the content of the notification.',
      btn: type === 'error' ? errorBtn : btn,
      btnDirection: 'right',
      key,
      onClose: close,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon('success')}>
          Success
        </Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>
          Warning
        </Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </Space>
    </>
  );
};

export default App;
