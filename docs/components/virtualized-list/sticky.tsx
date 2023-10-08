import { VirtuallizedList } from '@metro/components';

const App = () => {
  return (
    <VirtuallizedList>
      {Array.from({ length: 100 }).map((_, i) => {
        return (
          <div key={i}>
            {Array.from({ length: 10 }).map((_, j) => {
              const isGroupTop = j === 0;
              return (
                <div
                  key={j}
                  style={{
                    height: 36,
                    ...(isGroupTop && {
                      top: 0,
                      height: 36,
                      background: 'var(--metro-secondary-1)',
                      position: 'sticky',
                    }),
                  }}
                >
                  {isGroupTop ? i : `${i} - ${j}`}
                </div>
              );
            })}
          </div>
        );
      })}
    </VirtuallizedList>
  );
};

export default App;
