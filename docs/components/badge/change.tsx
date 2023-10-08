import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Space,
  Toggle,
} from '@metro/components';
import Add from '@metro/icons/dist/esm/react/Add';
import AttributeArrowLight from '@metro/icons/dist/esm/react/AttributeArrowLight';
import Autorenew from '@metro/icons/dist/esm/react/Autorenew';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const random = () => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount);
  };

  const onChange = (checked: boolean) => {
    setShow(checked ? 1 : 0);
  };

  return (
    <Space direction="vertical">
      <Space size="large">
        <Badge count={count}>
          <Avatar />
        </Badge>
        <ButtonGroup size="small">
          <Button onClick={decline} icon={<AttributeArrowLight />} onlyIcon />
          <Button onClick={increase} icon={<Add />} onlyIcon />
          <Button onClick={random} icon={<Autorenew />} onlyIcon />
        </ButtonGroup>
      </Space>
      <Space size="large">
        <Badge dot count={show}>
          <Avatar />
        </Badge>
        <Toggle onChange={onChange} checked={!!show} />
      </Space>
    </Space>
  );
};

export default App;
