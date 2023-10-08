import { Button, Result } from '@metro/components';
import HeartFilled from '@metro/icons/dist/esm/react/HeartFilled';
import React from 'react';

const App: React.FC = () => (
  <Result
    icon={<HeartFilled />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
);

export default App;
