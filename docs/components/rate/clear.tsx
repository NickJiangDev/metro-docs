import { Divider, Rate } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <Divider>allowClear: true</Divider>
    <Rate defaultValue={3} />
    <Divider>allowClear: false</Divider>
    <Rate allowClear={false} defaultValue={3} />
  </>
);

export default App;
