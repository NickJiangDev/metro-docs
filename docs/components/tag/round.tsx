import { Space, Tag } from '@metro/components';
import React from 'react';

const log = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
};

const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
};

const App: React.FC = () => (
  <Space size={[0, 8]} wrap>
    <Tag round>Tag 1</Tag>
    <Tag round>
      <a href="https://portal.idatatlas.com">Link</a>
    </Tag>
    <Tag round closable onClose={log}>
      Tag 2
    </Tag>
    <Tag round closable onClose={preventDefault}>
      Prevent Default
    </Tag>
  </Space>
);

export default App;
