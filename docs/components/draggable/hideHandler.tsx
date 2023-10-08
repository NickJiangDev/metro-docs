import { Draggable } from '@metro/components';

const App = () => {
  return (
    <Draggable hideHandler>
      <div style={{ width: '300px', height: '300px' }} />
    </Draggable>
  );
};
export default App;
