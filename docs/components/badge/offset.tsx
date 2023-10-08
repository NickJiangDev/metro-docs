import { Avatar, Badge } from '@metro/components';

export default () => (
  <>
    <h2>自定义位置偏移</h2>
    <Badge count={5} offsetFromTopRight={[10, 10]}>
      <Avatar />
    </Badge>
  </>
);
