import type { DataNode } from '@metro/components';
import { Select, Toggle, Tree } from '@metro/components';
import AiLab from '@metro/icons/dist/esm/react/AiLab';
import React, { useState } from 'react';

const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <AiLab />,
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        icon: <AiLab />,
        children: [
          { title: 'leaf', key: '0-0-0-0', icon: <AiLab /> },
          {
            title: (
              <>
                <div>multiple line title</div>
                <div>multiple line title</div>
              </>
            ),
            key: '0-0-0-1',
            icon: <AiLab />,
          },
          { title: 'leaf', key: '0-0-0-2', icon: <AiLab /> },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        icon: <AiLab />,
        children: [{ title: 'leaf', key: '0-0-1-0', icon: <AiLab /> }],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        icon: <AiLab />,
        children: [
          { title: 'leaf', key: '0-0-2-0', icon: <AiLab /> },
          {
            title: 'leaf',
            key: '0-0-2-1',
            icon: <AiLab />,
            switcherIcon: <AiLab />,
          },
        ],
      },
    ],
  },
  {
    title: 'parent 2',
    key: '0-1',
    icon: <AiLab />,
    children: [
      {
        title: 'parent 2-0',
        key: '0-1-0',
        icon: <AiLab />,
        children: [
          { title: 'leaf', key: '0-1-0-0', icon: <AiLab /> },
          { title: 'leaf', key: '0-1-0-1', icon: <AiLab /> },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [showLine, setShowLine] = useState<boolean>(true);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showLeafIcon, setShowLeafIcon] = useState<boolean | React.ReactNode>(
    true,
  );

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  const handleLeafIconChange = (value: 'true' | 'false' | 'custom') => {
    if (value === 'custom') {
      return setShowLeafIcon(<AiLab />);
    }

    if (value === 'true') {
      return setShowLeafIcon(true);
    }

    return setShowLeafIcon(false);
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        showLine: <Toggle checked={!!showLine} onChange={setShowLine} />
        <br />
        <br />
        showIcon: <Toggle checked={showIcon} onChange={setShowIcon} />
        <br />
        <br />
        showLeafIcon:{' '}
        <Select defaultValue="true" onChange={handleLeafIconChange}>
          <Select.Option value="true">True</Select.Option>
          <Select.Option value="false">False</Select.Option>
          <Select.Option value="custom">Custom icon</Select.Option>
        </Select>
      </div>
      <Tree
        showLine={showLine ? { showLeafIcon } : false}
        showIcon={showIcon}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};

export default App;
