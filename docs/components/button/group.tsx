import { Button, ButtonGroup, Divider, Space } from '@metro/components';
import {
  ChartBar,
  ChartLine,
  ChartPie,
  Checked,
  ChevronDown,
  Close,
  Launch,
  Map,
  StarOff,
  StarOn,
} from '@metro/icons/dist/esm/react';
import React from 'react';

export default () => {
  const [focus, setFocus] = React.useState('staroff');
  return (
    <Space direction="vertical">
      <ButtonGroup size="small">
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button icon={<Launch />} iconDirection="right">
          button
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button icon={<Launch />} iconDirection="right">
          button
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button icon={<Map />} />
        <Button icon={<ChartPie />} />
        <Button icon={<ChartLine />} />
        <Button icon={<ChartBar />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button
          icon={<StarOff />}
          focus={focus === 'staroff'}
          onClick={() => setFocus('staroff')}
          onlyIcon
        />
        <Button
          icon={<StarOn />}
          focus={focus === 'staron'}
          onClick={() => setFocus('staron')}
          onlyIcon
        />
        <Button
          danger
          icon={<Close />}
          focus={focus === 'close'}
          onClick={() => setFocus('close')}
          onlyIcon
        />
        <Button
          success
          icon={<Checked />}
          focus={focus === 'check'}
          onClick={() => setFocus('check')}
          onlyIcon
        />
      </ButtonGroup>
      <ButtonGroup>
        <Button>button</Button>
        <Button icon={<ChevronDown />} onlyIcon />
      </ButtonGroup>
      <Divider>disabled</Divider>
      <ButtonGroup disabled>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
        <Button icon={<Launch />} iconDirection="right">
          button
        </Button>
      </ButtonGroup>
    </Space>
  );
};
