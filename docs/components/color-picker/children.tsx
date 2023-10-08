import { Button, ColorPicker } from '@metro/components';
import React from 'react';

const App = () => {
  const [color, setColor] = React.useState('#000');
  const [favors, setFavors] = React.useState<string[]>([]);
  const [stops, setStops] = React.useState([]);
  const [rotate, setRotate] = React.useState('10');
  const [size, setSize] = React.useState<string>('contain');
  const [type, setType] = React.useState('pure');
  const onStopsChange = React.useCallback((vals: any) => {
    setStops(vals);
  }, []);
  const onChange = React.useCallback((c: string) => {
    console.log('-c-', c);
    setColor(c);
  }, []);
  return (
    <ColorPicker
      type={type}
      color={color}
      stops={stops}
      favors={favors}
      onChange={onChange}
      showTypeSelect
      rotate={rotate}
      imgSize={size}
      onActiveTypeChange={setType}
      onRotateChange={setRotate}
      onStopsChange={onStopsChange}
      onSizeChange={setSize}
      onChangeColors={setFavors}
    >
      <Button>Open</Button>
    </ColorPicker>
  );
};
export default App;
