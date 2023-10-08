import { Button, Popconfirm, toast } from '@metro/components';
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
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="知道了"
    cancelText="不想要"
  >
    <Button>Custom Text</Button>
  </Popconfirm>
);

export default App;
