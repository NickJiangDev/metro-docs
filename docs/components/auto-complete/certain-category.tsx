import { AutoComplete, Input } from '@metro/components';
import GroupOutline from '@metro/icons/dist/esm/react/GroupOutline';
import React from 'react';

const renderTitle = (title: string) => (
  <span>
    {title}
    <a
      style={{ float: 'right' }}
      href="/"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <GroupOutline /> {count}
      </span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('Design', 10000), renderItem('Design UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [
      renderItem('Design UI FAQ', 60100),
      renderItem('Design FAQ', 30010),
    ],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('Design design language', 100000)],
  },
];

const App: React.FC = () => (
  <AutoComplete
    popupClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{ width: 250 }}
    options={options}
  >
    <Input.Search size="large" placeholder="input here" />
  </AutoComplete>
);

export default App;
