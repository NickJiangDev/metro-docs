import { Button, Divider, Space } from '@metro/components';
import User from '@metro/icons/dist/esm/react/User';

export default () => (
  <>
    <Space wrap>
      <Button icon={<User />} dropdown size="large" />
      <Button icon={<User />} dropdown />
      <Button icon={<User />} dropdown size="small" />
    </Space>
    <Divider>Ghost</Divider>
    <Space wrap>
      <Button icon={<User />} dropdown size="large" ghost />
      <Button icon={<User />} dropdown ghost />
      <Button icon={<User />} dropdown size="small" ghost />
    </Space>
  </>
);
