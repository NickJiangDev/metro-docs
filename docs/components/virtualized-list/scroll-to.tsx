import {
  Button,
  InputNumber,
  Space,
  VirtuallizedList,
  VitrualizedListHandle,
} from '@metro/components';
import { useRef, useState } from 'react';

const App = () => {
  const LENGTH = 1000;
  const [scrollIndex, setScrollIndex] = useState(567);
  const [scrollOffset, setScrollOffset] = useState(1000);
  const ref = useRef<VitrualizedListHandle>(null);
  const onScrollIndexChange = (value: number | null) => {
    value && setScrollIndex(value);
  };
  const onScrollOffsetChange = (value: number | null) => {
    value && setScrollIndex(value);
  };
  return (
    <Space direction="vertical">
      <div>
        <InputNumber value={scrollIndex} onChange={onScrollIndexChange} />
        <Button
          onClick={() => {
            ref.current?.scrollToIndex(scrollIndex);
          }}
        >
          scroll to index
        </Button>
        <Button
          onClick={() => {
            setScrollIndex(Math.round(LENGTH * Math.random()));
          }}
        >
          randomize
        </Button>
      </div>
      <div>
        <InputNumber value={scrollOffset} onChange={onScrollOffsetChange} />
        <Button
          onClick={() => {
            ref.current?.scrollTo(scrollIndex);
          }}
        >
          scroll to offset
        </Button>
        <Button
          onClick={() => {
            ref.current?.scrollBy(scrollOffset);
          }}
        >
          scroll by offset
        </Button>
      </div>
      <VirtuallizedList ref={ref} style={{ flex: 1 }}>
        {Array.from({ length: LENGTH }).map((_, i) => (
          <div key={i} style={{ height: 36 }}>
            {i}
          </div>
        ))}
      </VirtuallizedList>
    </Space>
  );
};

export default App;
