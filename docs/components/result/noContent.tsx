import { Button, Result } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <Result
    status="noContent"
    title="Nothing found"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default App;
