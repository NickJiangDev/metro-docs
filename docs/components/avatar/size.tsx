import { Avatar, Space } from '@metro/components';

export default () => {
  return (
    <Space direction="vertical">
      <Space>
        <Avatar size="xxl" shape="squire">
          A
        </Avatar>
        <Avatar size="xl" shape="squire">
          A
        </Avatar>
        <Avatar size="l" shape="squire">
          A
        </Avatar>
        <Avatar size="m" shape="squire">
          A
        </Avatar>
        <Avatar size="s" shape="squire">
          A
        </Avatar>
        <Avatar size="xs" shape="squire">
          A
        </Avatar>
      </Space>
      <Space>
        <Avatar size="xxl">A</Avatar>
        <Avatar size="xl">A</Avatar>
        <Avatar size="l">A</Avatar>
        <Avatar size="m">A</Avatar>
        <Avatar size="s">A</Avatar>
        <Avatar size="xs">A</Avatar>
      </Space>
    </Space>
  );
};
