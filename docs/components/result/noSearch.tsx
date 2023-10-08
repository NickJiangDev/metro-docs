import { Button, Result } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Result
    status="noSearch"
    title="No search result"
    subTitle="Try again with another keyword"
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default App;
