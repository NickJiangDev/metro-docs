import { VirtuallizedList } from '@metro/components';

const App = () => {
  return (
    <VirtuallizedList>
      {Array.from({ length: 1000 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 100,
            borderRadius: 8,
            margin: 10,
            padding: 10,
            background: 'var(--metro-fill-1)',
          }}
        >
          {i}
        </div>
      ))}
    </VirtuallizedList>
  );
};

export default App;
