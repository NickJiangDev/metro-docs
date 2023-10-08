import type { MentionsOptionProps } from '@metro/components';
import { Mentions } from '@metro/components';
import React from 'react';

const onChange = (value: string) => {
  console.log('Change:', value);
};

const onSelect = (option: MentionsOptionProps) => {
  console.log('select', option);
};

const App: React.FC = () => (
  <Mentions
    style={{ width: '100%' }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@user"
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
);

export default App;
