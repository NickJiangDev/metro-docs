import { Button, Divider, Space } from '@metro/components';

export default () => (
  <Space direction="vertical">
    <Divider orientation="left">Default</Divider>
    <Space>
      <Button>button</Button>
      <Button danger>button</Button>
      <Button success>button</Button>
    </Space>
    <Divider orientation="left">Primary</Divider>
    <Space>
      <Button type="primary">button</Button>
      <Button type="primary" danger>
        button
      </Button>
    </Space>
    <Divider orientation="left">Ghost</Divider>
    <Space>
      <Button ghost>button</Button>
      <Button ghost type="primary">
        button
      </Button>
      <Button ghost danger>
        button
      </Button>
    </Space>
  </Space>
);
