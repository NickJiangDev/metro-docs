import { Avatar, Badge, Divider, Space } from '@metro/components';
import User from '@metro/icons/dist/esm/react/User';
const url = 'https://joesch.moe/api/v1/random?key=1';

const style = { marginRight: 10 };
export default () => (
  <>
    <h2>类型</h2>
    <Divider orientation="left">Text</Divider>
    <Space>
      <Avatar>U</Avatar>
      <Badge status="success" dot>
        <Avatar noBorder>U</Avatar>
      </Badge>
      <Badge status="default" dot>
        <Avatar>U</Avatar>
      </Badge>
      <Avatar>Avatar</Avatar>
      <Avatar style={{ color: 'var(--metro-primary-default)' }}>U</Avatar>
      <Avatar
        style={{
          backgroundColor: 'var(--metro-primary-default)',
          color: 'var(--metro-text-light-0)',
        }}
      >
        U
      </Avatar>
    </Space>

    <Divider orientation="left">Image</Divider>
    <Space>
      <Avatar src={url} />
      <Badge status="success" dot>
        <Avatar src={url} />
      </Badge>
      <Badge status="default" dot>
        <Avatar src={url} />
      </Badge>
      <Avatar src={url} alt="avatar" />
    </Space>

    <Divider orientation="left">Icon</Divider>
    <Space>
      <Avatar icon={<User />} />
      <Badge status="success" dot>
        <Avatar icon={<User />} />
      </Badge>
      <Badge status="default" dot>
        <Avatar icon={<User />} />
      </Badge>
      <Avatar
        icon={<User style={{ color: 'var(--metro-primary-default)' }} />}
      />
      <Avatar
        style={{
          backgroundColor: 'var(--metro-primary-default)',
          color: 'var(--metro-text-light-0)',
        }}
        icon={<User />}
      />
    </Space>
  </>
);
