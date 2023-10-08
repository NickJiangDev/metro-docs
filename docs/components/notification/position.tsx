import type { NotificationPlacement } from '@metro/components';
import { Button, Divider, notification, Space } from '@metro/components';
import React from 'react';

const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification('top')}>
          top
        </Button>
        <Button type="primary" onClick={() => openNotification('bottom')}>
          bottom
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button type="primary" onClick={() => openNotification('topLeft')}>
          topLeft
        </Button>
        <Button type="primary" onClick={() => openNotification('topRight')}>
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button type="primary" onClick={() => openNotification('bottomLeft')}>
          bottomLeft
        </Button>
        <Button type="primary" onClick={() => openNotification('bottomRight')}>
          bottomRight
        </Button>
      </Space>
    </>
  );
};

export default App;
