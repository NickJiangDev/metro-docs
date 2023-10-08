import { Avatar, Badge, Space } from '@metro/components';

export default () => (
  <>
    <h2>status状态</h2>
    <Space direction="vertical">
      <Space>
        <Badge count={100} status="default">
          <Avatar />
        </Badge>
        <Badge count={100} status="processing">
          <Avatar />
        </Badge>
        <Badge count={100} status="error">
          <Avatar />
        </Badge>
        <Badge count={100} status="success">
          <Avatar />
        </Badge>
        <Badge count={100} status="warning">
          <Avatar />
        </Badge>
        <Badge count={100} status="disabled">
          <Avatar />
        </Badge>
      </Space>
      <Space>
        <Badge dot status="default">
          <Avatar />
        </Badge>
        <Badge dot status="processing">
          <Avatar />
        </Badge>
        <Badge dot status="error">
          <Avatar />
        </Badge>
        <Badge dot status="success">
          <Avatar />
        </Badge>
        <Badge dot status="warning">
          <Avatar />
        </Badge>
        <Badge dot status="disabled">
          <Avatar />
        </Badge>
      </Space>
    </Space>
  </>
);
