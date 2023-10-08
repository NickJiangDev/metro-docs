import {
  VirtualizedListItemProps,
  VirtualizedListWindowProps,
  VirtuallizedList,
} from '@metro/components';
import { forwardRef } from 'react';

const UlList = forwardRef<HTMLDivElement, VirtualizedListWindowProps>(
  ({ children, attrs, height }, ref) => {
    return (
      <div ref={ref} {...attrs}>
        <ul style={{ position: 'relative', height, margin: 0 }}>{children}</ul>
      </div>
    );
  },
);
const Li = forwardRef<HTMLLIElement, VirtualizedListItemProps>(
  ({ children, style }, ref) => {
    return (
      <li ref={ref} style={{ ...style, marginLeft: 30 }}>
        {children}
      </li>
    );
  },
);

const App = () => {
  return (
    <VirtuallizedList components={{ Root: UlList, Item: Li }} overscan={20}>
      {Array.from({ length: 1000 }).map((_, i) => i)}
    </VirtuallizedList>
  );
};

export default App;
