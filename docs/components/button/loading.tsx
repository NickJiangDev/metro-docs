import { Button, Divider, Space } from '@metro/components';

export default () => (
  <Space direction="vertical">
    <Divider orientation="left">Default</Divider>
    <Space>
      <Button>button</Button>
      <Button loading>button</Button>
      <Button loading onlyLoading>
        button
      </Button>
    </Space>
    <Divider orientation="left">Primary</Divider>
    <Space>
      <Button type="primary">button</Button>
      <Button type="primary" loading>
        button
      </Button>
      <Button type="primary" onlyLoading loading>
        button
      </Button>
    </Space>
    <Divider orientation="left">Ghost</Divider>
    <Space>
      <Button ghost>button</Button>
      <Button ghost loading>
        button
      </Button>
      <Button ghost loading onlyLoading>
        button
      </Button>
    </Space>
  </Space>
);
