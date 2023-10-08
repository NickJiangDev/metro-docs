import { VirtuallizedList } from '@metro/components';

const App = () => {
  return (
    <VirtuallizedList>
      {Array.from({ length: 1000 }).map((_, i) => (
        <div key={i} style={{ height: 36 }}>
          {i}
        </div>
      ))}
    </VirtuallizedList>
  );
};

export default App;
