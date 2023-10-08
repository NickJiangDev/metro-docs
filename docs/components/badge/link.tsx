import { Avatar, Badge } from '@metro/components';
import React from 'react';

const App: React.FC = () => (
  <a href="#">
    <Badge count={5}>
      <Avatar />
    </Badge>
  </a>
);

export default App;
