import type { StopProps } from '@metro/components';
import { ColorGradient } from '@metro/components';
import * as React from 'react';

const App = () => {
  const [stops, setStops] = React.useState([
    { offset: 0, color: '#9adafa' },
    { offset: 0.5, color: '#000' },
    { offset: 1, color: '#028080' },
  ]);
  const onChange = React.useCallback((stops: StopProps[]) => {
    setStops(stops);
  }, []);
  return <ColorGradient color="#ddd" stops={stops} onChange={onChange} />;
};
export default App;
