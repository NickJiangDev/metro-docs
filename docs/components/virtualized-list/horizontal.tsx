import { VirtuallizedList } from '@metro/components';

const App = () => {
  return (
    <VirtuallizedList horizontal>
      {Array.from({ length: 1000 }).map((_, i) => (
        <div key={i} style={{ paddingRight: 20 }}>
          {i}
        </div>
      ))}
    </VirtuallizedList>
  );
};

export default App;
