import { Layout, Menu } from '@metro/components';
import React from 'react';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
  <Layout style={{ height: 380, overflow: 'auto' }}>
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <div className="fixed-logo" />
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      />
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px' }}>
      <div className="site-layout-background" style={{ padding: 24 }}>
        Content
        <div style={{ height: 500 }} />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Footer</Footer>
  </Layout>
);

export default App;
