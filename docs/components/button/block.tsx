import { Button } from '@metro/components';

const style = { marginTop: '5px' };
export default () => (
  <>
    <Button block style={style}>
      button
    </Button>
    <Button type="primary" block style={style}>
      button
    </Button>
    <Button ghost block style={style}>
      button
    </Button>
  </>
);
