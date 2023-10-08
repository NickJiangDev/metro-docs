import { Badge, Space, Toggle } from '@metro/components';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Toggle checked={show} onChange={() => setShow(!show)} />
      <br />
      <Space>
        <Badge count={show ? 11 : 0} showZero color="#faad14" />
        <Badge count={show ? 25 : 0} />
        <Badge count={show ? 109 : 0} />
      </Space>
    </>
  );
};

export default App;
