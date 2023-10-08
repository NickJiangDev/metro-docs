import { Breadcrumb } from '@metro/components';
import MoreHoriz from '@metro/icons/dist/esm/react/MoreHoriz';
import React from 'react';

const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        宝山1
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        宝山2
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        宝山3
      </a>
    ),
  },
];

const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        title: '上海市',
      },
      {
        title: <a href="">宝山区</a>,
      },
      {
        dropdownIcon: false,
        title: <MoreHoriz />,
        menu: {
          items: menuItems,
        },
      },
      {
        title: '顾村公园',
      },
    ]}
  />
);

export default App;
