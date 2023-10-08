import type { ColumnsType } from '@metro/components';
import { Divider, Result, Table, Tag } from '@metro/components';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'lime' : 'cyan';
          if (tag === 'loser') {
            color = 'violet';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const App: React.FC = () => (
  <>
    <Divider>Result Empty</Divider>
    <Table
      columns={columns}
      dataSource={[]}
      locale={{
        emptyText: (
          <Result
            status="noContent"
            title="No Content"
            subTitle="Custom No Content"
          />
        ),
      }}
    />
    <Divider>Text Empty</Divider>
    <Table
      columns={columns}
      dataSource={[]}
      locale={{
        emptyText: 'Custom No Content',
      }}
    />
    <Divider>No Empty</Divider>
    <Table
      columns={columns}
      dataSource={[]}
      locale={{
        emptyText: false,
      }}
    />
  </>
);

export default App;
