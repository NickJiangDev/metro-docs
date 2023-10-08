import type { RadioChangeEvent } from '@metro/components';
import { Button, Drawer, Radio, Space } from '@metro/components';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>('null-footer');
  const [footer, setFooter] = useState<React.ReactNode | null>(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    if (value === 'null-footer') {
      setFooter(null);
    } else {
      setFooter(<div>Custom Footer</div>);
    }
    setValue(value);
  };

  return (
    <>
      <Space>
        <Radio.Group value={value} onChange={onChange}>
          <Radio value="custom">自定义footer</Radio>
          <Radio value="null-footer">不需要footer</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        closable={false}
        onClose={onClose}
        open={open}
        footer={footer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default App;
