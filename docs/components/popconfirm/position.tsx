import { Button, Popconfirm } from '@metro/components';
import React from 'react';

const text = <span>Title</span>;

const content = `This is a description`;

const buttonWidth = 70;

const App: React.FC = () => (
  <div className="popconfirm-position">
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Popconfirm
        placement="topLeft"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm
        placement="top"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm
        placement="topRight"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>TR</Button>
      </Popconfirm>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <Popconfirm
        placement="leftTop"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>LT</Button>
      </Popconfirm>
      <Popconfirm
        placement="left"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm
        placement="leftBottom"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>LB</Button>
      </Popconfirm>
    </div>
    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
      <Popconfirm
        placement="rightTop"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>RT</Button>
      </Popconfirm>
      <Popconfirm
        placement="right"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm
        placement="rightBottom"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>RB</Button>
      </Popconfirm>
    </div>
    <div
      style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}
    >
      <Popconfirm
        placement="bottomLeft"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>BL</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottom"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottomRight"
        title={text}
        description={content}
        trigger="click"
      >
        <Button>BR</Button>
      </Popconfirm>
    </div>
  </div>
);

export default App;
