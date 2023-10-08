import { Rate } from '@metro/components';
import EmojiFilled from '@metro/icons/dist/esm/react/EmojiFilled';
import React from 'react';

const App: React.FC = () => (
  <>
    <Rate character={<EmojiFilled />} allowHalf />
    <br />
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </>
);

export default App;
