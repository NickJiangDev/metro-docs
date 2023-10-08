import { Layout, Menu } from '@metro/components';
import {
  IndentDecrease,
  IndentIncrease,
  User,
} from '@metro/icons/dist/esm/react';
import React, { useState } from 'react';
import './custom-trigger.less';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="custom-trigger-logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <User />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <User />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <User />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0 }}>
          {React.createElement(collapsed ? IndentIncrease : IndentDecrease, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
