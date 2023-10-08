import type { MentionsOptionProps } from '@metro/components';
import { Mentions, Tag } from '@metro/components';
import React from 'react';

const onSelect = (option: MentionsOptionProps) => {
  console.log('select', option);
};

const App: React.FC = () => {
  const [lists, setLists] = React.useState<string[]>([]);
  const onChange = (value: string, lists: string[]) => {
    console.log('Change:', value);
    setLists(lists);
  };

  return (
    <>
      <Mentions
        style={{ width: '100%' }}
        onChange={onChange}
        onSelect={onSelect}
        options={[
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
        ]}
      />
      <br />
      <br />
      Lists:{' '}
      {lists?.map((list) => (
        <Tag>{list}</Tag>
      ))}
    </>
  );
};

export default App;
