import type { InputRef } from '@metro/components';
import React, { useRef } from 'react';

import { Button, Input, Space } from '@metro/components';

const App: React.FC = () => {
  const inputRef = useRef<InputRef>(null);

  const sharedProps = {
    style: { width: '100%' },
    defaultValue: 'Metro Design love you!',
    ref: inputRef,
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space wrap>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'start',
            });
          }}
        >
          Focus at first
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'end',
            });
          }}
        >
          Focus at last
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'all',
            });
          }}
        >
          Focus to select all
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              preventScroll: true,
            });
          }}
        >
          Focus prevent scroll
        </Button>
      </Space>
      <br />
      <Input {...sharedProps} />
    </Space>
  );
};

export default App;
