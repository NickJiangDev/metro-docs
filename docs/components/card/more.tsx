import { Avatar, Card } from '@metro/components';
import Edit2 from '@metro/icons/dist/esm/react/Edit2';
import MoreHoriz from '@metro/icons/dist/esm/react/MoreHoriz';
import Setting from '@metro/icons/dist/esm/react/Setting';
import React from 'react';

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <Setting key="setting" />,
      <Edit2 key="edit" />,
      <MoreHoriz key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
      }
      title="Card title"
      description="This is the description"
    />
  </Card>
);

export default App;
