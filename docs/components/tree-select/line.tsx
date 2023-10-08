import { Space, Toggle, TreeSelect } from '@metro/components';
import React, { useState } from 'react';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: 'sss',
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(false);

  return (
    <Space direction="vertical">
      treeLine
      <Toggle
        style={{ width: 100 }}
        checked={treeLine}
        onChange={() => setTreeLine(!treeLine)}
      />
      showLeafIcon
      <Toggle
        disabled={!treeLine}
        checked={showLeafIcon}
        onChange={() => setShowLeafIcon(!showLeafIcon)}
      />
      <TreeSelect
        treeLine={treeLine && { showLeafIcon }}
        style={{ width: 300 }}
        treeData={treeData}
      />
    </Space>
  );
};

export default App;
