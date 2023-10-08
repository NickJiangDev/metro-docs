import { Divider, Draggable } from '@metro/components';

const App = () => {
  return (
    <>
      <Divider>X轴</Divider>
      <Draggable axis="x">
        <div style={{ width: '300px', height: '300px' }} />
      </Draggable>
      <Divider>Y轴</Divider>
      <Draggable axis="y">
        <div style={{ width: '300px', height: '300px' }} />
      </Draggable>
    </>
  );
};
export default App;
