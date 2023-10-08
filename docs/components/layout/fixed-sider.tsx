import type { MenuProps } from '@metro/components';
import { Layout, Menu } from '@metro/components';
import { User } from '@metro/icons/dist/esm/react';
import React from 'react';
import './fixed-sider.less';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  User,
  User,
  User,
  User,
  User,
  User,
  User,
  User,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => (
  <Layout hasSider style={{ height: 300, overflow: 'auto' }}>
    <Sider
      style={{
        overflow: 'auto',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="fixed-sider-logo" />
      <Menu mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Sider>
    <Layout className="fixed-sider-site-layout" style={{ marginLeft: 200 }}>
      <Header
        className="fixed-sider-site-layout-background"
        style={{ padding: 0 }}
      />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div
          className="fixed-sider-site-layout-background"
          style={{ padding: 24, textAlign: 'center' }}
        >
          <p>long content</p>
          {
            // indicates very long content
            Array.from({ length: 100 }, (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? 'more' : '...'}
                <br />
              </React.Fragment>
            ))
          }
        </div>
      </Content>
    </Layout>
  </Layout>
);

export default App;
