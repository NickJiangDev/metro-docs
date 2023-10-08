import { Divider, Empty } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <>
    <Divider orientation="left">Empty.PRESENTED_IMAGE_SIMPLE</Divider>
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    <Divider orientation="left">Empty.PRESENTED_IMAGE_DEFAULT</Divider>
    <Empty image={Empty.PRESENTED_IMAGE_DEFAULT} />
  </>
);

export default App;
