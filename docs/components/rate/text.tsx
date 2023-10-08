import { Rate } from '@metro/components';
import React, { useState } from 'react';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const App: React.FC = () => {
  const [value, setValue] = useState(3);

  return (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span style={{ marginLeft: 10 }}>{desc[value - 1]}</span> : ''}
    </span>
  );
};

export default App;
