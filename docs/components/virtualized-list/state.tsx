import { Button, VirtuallizedList } from '@metro/components';
import { useState } from 'react';

const App = () => {
  const [actives, setActives] = useState<{ [key: number]: boolean }>({
    0: true,
    3: true,
    6: true,
    9: true,
    12: true,
  });
  return (
    <VirtuallizedList>
      {Array.from({ length: 1000 }).map((_, i) => {
        const active = !!actives[i];
        return (
          <div
            key={i}
            style={{
              background: active ? 'var(--metro-primary-default)' : '#fff',
              display: 'flex',
              flexDirection: 'row',
              transition: '0.5s ease',
            }}
          >
            <div>
              <Button
                onClick={() => {
                  setActives((prev) => ({
                    ...prev,
                    [i]: !prev[i],
                  }));
                }}
              >
                {active ? 'close' : 'open'}
              </Button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                height: active ? 200 : 40,
                transition: '0.5s ease',
              }}
            >
              {i}
            </div>
          </div>
        );
      })}
    </VirtuallizedList>
  );
};

export default App;
