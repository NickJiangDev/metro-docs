import type { RadioChangeEvent } from '@metro/components';
import { Button, Drawer, Radio, Space } from '@metro/components';
import { DrawerPanelProps } from '@metro/components/src/drawer/DrawerPanel';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [operatorsTarget, setOperatorsTarget] =
    useState<DrawerPanelProps['operatorsTarget']>('footer');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    setOperatorsTarget(value);
  };

  return (
    <>
      <Space>
        <Radio.Group value={operatorsTarget} onChange={onChange}>
          <Radio value="footer">操作展示在Footer(默认)</Radio>
          <Radio value="extra">操作展示在Extra</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Operators Target"
        closable={false}
        onClose={onClose}
        open={open}
        destroyOnClose
        operatorsTarget={operatorsTarget}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default App;
