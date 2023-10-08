import { Button, Space } from '@metro/components';

export default () => (
  <Space>
    <Button.Check checked>Controlled</Button.Check>
    <Button.Check>Uncontrolled</Button.Check>
    <Button.Check disabled>Disabled</Button.Check>
  </Space>
);
