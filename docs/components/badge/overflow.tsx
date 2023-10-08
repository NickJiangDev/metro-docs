import { Avatar, Badge, Space } from '@metro/components';

export default () => (
  <>
    <h2>封顶数字</h2>
    <Space size="large">
      <Badge count={99}>
        <Avatar />
      </Badge>
      <Badge count={100}>
        <Avatar />
      </Badge>
      <Badge count={99} overflowCount={10}>
        <Avatar />
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <Avatar />
      </Badge>
    </Space>
  </>
);
