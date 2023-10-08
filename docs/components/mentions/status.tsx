import type { MentionsOptionProps } from '@metro/components';
import { Mentions, Space } from '@metro/components';
import React from 'react';

const onChange = (value: string) => {
  console.log('Change:', value);
};

const onSelect = (option: MentionsOptionProps) => {
  console.log('select', option);
};

const App: React.FC = () => {
  const options = [
    {
      value: 'user',
      label: 'user',
    },
    {
      value: 'admin',
      label: 'admin',
    },
    {
      value: 'superAdmin',
      label: 'superAdmin',
    },
  ];

  return (
    <Space direction="vertical">
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@user"
        status="error"
        options={options}
      />
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@user"
        status="warning"
        options={options}
      />
    </Space>
  );
};

export default App;
