import { Table } from '@metro/components';
import React from 'react';

const columns = [
  {
    title: ' ',
    dataIndex: 'color',
    key: 'color',
    width: 25,
  },
  {
    title: 'Semantic Token',
    dataIndex: 'st',
    key: 'st',
  },
  {
    title: 'Global Token',
    dataIndex: 'gt',
    key: 'gt',
  },
  {
    title: 'Color',
    dataIndex: 'colorText',
    key: 'colorText',
  },
  {
    title: 'Usage',
    dataIndex: 'usage',
    key: 'usage',
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
  },
];

const SemanticTable: React.FC<{ title: string; data: any; key?: string }> =
  React.memo(({ title, data }) => (
    <>
      <h2 style={{ marginBottom: 10 }}>{title}</h2>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        rowKey={'st'}
      />
    </>
  ));

export default SemanticTable;
