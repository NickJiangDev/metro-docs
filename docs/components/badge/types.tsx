import { Avatar, Badge, Divider } from '@metro/components';

export default () => {
  return (
    <>
      <h2>type类型</h2>
      <Divider orientation="left">Dot</Divider>
      <Badge dot>
        <Avatar />
      </Badge>
      <Divider orientation="left">Number - Round</Divider>
      <Badge count={10}>
        <Avatar />
      </Badge>
      <Divider orientation="left">Number</Divider>
      <Badge count={10} round={false}>
        <Avatar />
      </Badge>
    </>
  );
};
