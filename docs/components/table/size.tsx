import type { ColumnsType } from '@metro/components';
import { Divider, Table } from '@metro/components';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

const App: React.FC = () => (
  <>
    <Divider>Large size table</Divider>
    <Table columns={columns} dataSource={data} size="large" />
    <Divider>Middle size table(default size)</Divider>
    <Table columns={columns} dataSource={data} size="middle" />
    <Divider>Small size table</Divider>
    <Table columns={columns} dataSource={data} size="small" />
  </>
);

export default App;
