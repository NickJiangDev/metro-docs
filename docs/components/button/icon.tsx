import { Button, Space } from '@metro/components';
import { ChevronDown, Launch, User } from '@metro/icons/dist/esm/react';

export default () => (
  <Space wrap>
    <Button icon={<User />}>button</Button>
    <Button type="primary" icon={<ChevronDown />} iconDirection="right">
      button
    </Button>
    <Button ghost icon={<ChevronDown />} iconDirection="right">
      button
    </Button>
    <Button ghost icon={<Launch />} onlyIcon />
  </Space>
);
