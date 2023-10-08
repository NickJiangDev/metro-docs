import { Button, Popconfirm, Space, toast } from '@metro/components';
import React from 'react';

const confirm = (e?: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  toast.success('Click on Yes');
};

const cancel = (e?: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  toast.error('Click on No');
};

const App: React.FC = () => (
  <Space>
    <Popconfirm
      title="Info the task"
      description="Are you sure to info this task?"
      type="info"
      onConfirm={confirm}
      onCancel={cancel}
    >
      <Button type="primary">Info</Button>
    </Popconfirm>
    <Popconfirm
      title="Warning the task"
      description="Are you sure to warning this task?"
      type="warning"
      onConfirm={confirm}
      onCancel={cancel}
    >
      <Button type="primary">Warning</Button>
    </Popconfirm>
    <Popconfirm
      title="Complete the task"
      description="Are you sure to complete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      type="success"
    >
      <Button success>Success</Button>
    </Popconfirm>
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      type="error"
      onConfirm={confirm}
      onCancel={cancel}
    >
      <Button danger>Delete</Button>
    </Popconfirm>
  </Space>
);

export default App;
