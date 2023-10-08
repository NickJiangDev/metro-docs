import { Button, ButtonGroup, Progress, Space } from '@metro/components';
import Add from '@metro/icons/dist/esm/react/Add';
import Remove from '@metro/icons/dist/esm/react/Remove';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);

  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };

  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };

  return (
    <Space>
      <Progress percent={percent} type="circle" />
      <ButtonGroup>
        <Button onClick={decline} icon={<Remove />} />
        <Button onClick={increase} icon={<Add />} />
      </ButtonGroup>
    </Space>
  );
};

export default App;
