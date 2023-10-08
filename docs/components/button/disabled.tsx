import { Button, Divider, Space } from '@metro/components';

export default () => (
  <Space direction="vertical">
    <Divider orientation="left">Default</Divider>
    <Space wrap>
      <Button>button</Button>
      <Button disabled>button</Button>
      <Button danger>button</Button>
      <Button danger disabled>
        button
      </Button>
      <Button success>button</Button>
      <Button success disabled>
        button
      </Button>
    </Space>
    <Divider orientation="left">Primary</Divider>
    <Space wrap>
      <Button type="primary">button</Button>
      <Button type="primary" disabled>
        button
      </Button>
      <Button type="primary" danger>
        button
      </Button>
      <Button type="primary" danger disabled>
        button
      </Button>
    </Space>
    <Divider orientation="left">Ghost</Divider>
    <Space wrap>
      <Button ghost>button</Button>
      <Button ghost disabled>
        button
      </Button>
      <Button ghost danger>
        button
      </Button>
      <Button ghost danger disabled>
        button
      </Button>
      <Button ghost type="primary">
        button
      </Button>
      <Button ghost type="primary" disabled>
        button
      </Button>
    </Space>
  </Space>
);
