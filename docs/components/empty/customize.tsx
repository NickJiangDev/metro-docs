import { Button, Empty } from '@metro/components';
import React from 'react';
const url =
  'https://nickjiangdev.github.io/metro-docs/mds-logo.svg';

const App: React.FC = () => (
  <Empty
    image={url}
    imageStyle={{ height: 60 }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
);

export default App;
