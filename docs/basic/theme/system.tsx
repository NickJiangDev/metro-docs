import {
  Breadcrumb,
  Layout,
  Menu,
  MenuProps,
  Space,
  Table,
} from '@metro/components';
import User from '@metro/icons/dist/esm/react/User';
import React from 'react';
import './system.less';

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [User, User, User].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const App: React.FC = () => (
  <Layout
    style={{
      marginBottom: 20,
      border: '1px solid var(--metro-border-0)',
    }}
  >
    <Header className="header">
      <div className="system-theme-logo">Template Theme System</div>
      <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            padding: 10,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Space direction="vertical" style={{ width: '100%' }}>
            <Breadcrumb
              items={[
                {
                  title: 'Home',
                },
                {
                  title: <a href="">Page</a>,
                },
                {
                  title: <a href="">Sub Page</a>,
                },
                {
                  title: 'Current',
                },
              ]}
            />

            <Table
              dataSource={[
                {
                  key: '1',
                  name: '胡彦斌',
                  age: 32,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '2',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '3',
                  name: '陈冠希',
                  age: 35,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '4',
                  name: '周杰冷',
                  age: 38,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '5',
                  name: '梁志超',
                  age: 88,
                  address: '西湖区湖底公园1号',
                },
              ]}
              columns={[
                {
                  title: '姓名',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '年龄',
                  dataIndex: 'age',
                  key: 'age',
                },
                {
                  title: '住址',
                  dataIndex: 'address',
                  key: 'address',
                },
              ]}
            />
          </Space>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;
