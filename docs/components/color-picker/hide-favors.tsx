import { ColorPanel } from '@metro/components';
import React from 'react';

const App = () => {
  const [color, setColor] = React.useState('#000');
  return <ColorPanel color={color} onChange={setColor} favors={null} />;
};
export default App;
